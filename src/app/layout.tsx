import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Better Health | 花胶养生精品',
  description: '精选全球优质花胶，传承百年养生之道 | Premium fish maw for health and wellness',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
