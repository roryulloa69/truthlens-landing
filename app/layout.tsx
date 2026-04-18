import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'TruthLens — Detect AI Content, Deepfakes & Misinformation',
  description: 'TruthLens analyzes text, images, video, and web claims. Combining AI-detection signals, deepfake screening, and fact-check references into a single credibility check.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-white min-h-screen">{children}</body>
    </html>
  );
}
