'use client';

interface QuantitySelectorProps {
  value: number;
  onChange: (val: number) => void;
  min?: number;
  max?: number;
}

export default function QuantitySelector({ value, onChange, min = 1, max = 99 }: QuantitySelectorProps) {
  return (
    <div className="flex items-center border border-gold-300 rounded-md overflow-hidden w-fit">
      <button
        onClick={() => onChange(Math.max(min, value - 1))}
        disabled={value <= min}
        className="w-9 h-9 flex items-center justify-center text-gold-700 hover:bg-gold-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors font-medium text-lg"
        aria-label="Decrease quantity"
      >
        −
      </button>
      <span className="w-10 text-center text-sm font-medium select-none">{value}</span>
      <button
        onClick={() => onChange(Math.min(max, value + 1))}
        disabled={value >= max}
        className="w-9 h-9 flex items-center justify-center text-gold-700 hover:bg-gold-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors font-medium text-lg"
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
}
