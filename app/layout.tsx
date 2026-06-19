import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CRAV - Love cooking',
  description: 'Your home for easy, delicious meal prep recipes.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased text-[#111] bg-white min-h-screen" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
