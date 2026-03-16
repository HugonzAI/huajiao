'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { useCart } from '@/context/CartContext';
import Button from '@/components/ui/Button';

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  address: string;
  district: string;
  city: string;
  notes: string;
}

interface FormErrors {
  [key: string]: string;
}

export default function CheckoutForm() {
  const locale = useLocale();
  const t = useTranslations('checkout');
  const router = useRouter();
  const { clearCart } = useCart();

  const [form, setForm] = useState<FormData>({
    fullName: '', phone: '', email: '', address: '', district: '', city: '', notes: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);

  function validate(): FormErrors {
    const errs: FormErrors = {};
    if (!form.fullName.trim()) errs.fullName = t('requiredField');
    if (!form.phone.trim()) errs.phone = t('requiredField');
    else if (!/^[\d\s\+\-\(\)]{6,20}$/.test(form.phone)) errs.phone = t('invalidPhone');
    if (!form.email.trim()) errs.email = t('requiredField');
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = t('invalidEmail');
    if (!form.address.trim()) errs.address = t('requiredField');
    if (!form.district.trim()) errs.district = t('requiredField');
    if (!form.city.trim()) errs.city = t('requiredField');
    return errs;
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    setErrors((e) => { const n = { ...e }; delete n[name]; return n; });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setSubmitting(true);
    // Simulate a brief processing delay
    await new Promise((r) => setTimeout(r, 600));
    clearCart();
    router.push(`/${locale}/checkout/success`);
  }

  const inputCls = (field: string) =>
    `w-full border rounded-md px-3 py-2.5 text-sm outline-none transition-colors focus:border-gold-500 focus:ring-1 focus:ring-gold-300 ${
      errors[field] ? 'border-red-400 bg-red-50' : 'border-gold-200 bg-white hover:border-gold-300'
    }`;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <Field label={t('fullName')} error={errors.fullName}>
        <input name="fullName" value={form.fullName} onChange={handleChange} className={inputCls('fullName')} />
      </Field>
      <Field label={t('phone')} error={errors.phone}>
        <input name="phone" type="tel" value={form.phone} onChange={handleChange} className={inputCls('phone')} />
      </Field>
      <Field label={t('email')} error={errors.email}>
        <input name="email" type="email" value={form.email} onChange={handleChange} className={inputCls('email')} />
      </Field>
      <Field label={t('address')} error={errors.address}>
        <input name="address" value={form.address} onChange={handleChange} className={inputCls('address')} />
      </Field>
      <div className="grid grid-cols-2 gap-4">
        <Field label={t('district')} error={errors.district}>
          <input name="district" value={form.district} onChange={handleChange} className={inputCls('district')} />
        </Field>
        <Field label={t('city')} error={errors.city}>
          <input name="city" value={form.city} onChange={handleChange} className={inputCls('city')} />
        </Field>
      </div>
      <Field label={t('notes')} error={errors.notes}>
        <textarea
          name="notes"
          value={form.notes}
          onChange={handleChange}
          placeholder={t('notesPlaceholder')}
          rows={3}
          className={`${inputCls('notes')} resize-none`}
        />
      </Field>

      {/* Payment note */}
      <div className="bg-gold-50 border border-gold-200 rounded-lg p-4 text-sm">
        <p className="font-medium text-gold-800 mb-1">{t('paymentMethod')}</p>
        <p className="text-gold-600">{t('paymentNote')}</p>
      </div>

      <Button type="submit" variant="primary" size="lg" className="w-full" disabled={submitting}>
        {submitting ? t('processing') : t('placeOrder')}
      </Button>
    </form>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-sm font-medium text-ink mb-1.5">{label}</label>
      {children}
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
}
