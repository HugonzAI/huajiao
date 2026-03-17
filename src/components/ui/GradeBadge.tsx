import { ProductGrade } from '@/types/product';
import { cn } from '@/lib/utils';

const gradeStyles: Record<ProductGrade, string> = {
  AAA: 'bg-gold-600 text-white',
  AA:  'bg-gold-400 text-ink',
  A:   'bg-gold-200 text-gold-900',
  B:   'bg-gold-100 text-gold-700',
};

interface GradeBadgeProps {
  grade: ProductGrade;
  label?: string;
  className?: string;
}

export default function GradeBadge({ grade, label, className }: GradeBadgeProps) {
  return (
    <span
      className={cn(
        'inline-block text-xs font-bold px-2 py-0.5 rounded tracking-wide',
        gradeStyles[grade],
        className
      )}
    >
      {label ?? grade}
    </span>
  );
}
