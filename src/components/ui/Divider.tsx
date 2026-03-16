import { cn } from '@/lib/utils';

export default function Divider({ className }: { className?: string }) {
  return <hr className={cn('border-gold-200', className)} />;
}
