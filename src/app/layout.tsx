import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '花胶精品 | Premium Fish Maw',
  description: '精选优质花胶，传承养生之道 | Premium fish maw sourced from the world\'s finest origins',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
