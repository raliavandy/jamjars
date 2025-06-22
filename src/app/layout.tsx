import './globals.css';
import type { Metadata } from 'next';

// Define default metadata
export const metadata: Metadata = {
  title: 'Jam Jars', // Browser tab
  description: 'Web Consultancy & Contracting Services', // SEO description
};

// Layout wraps all pages
export default function RootLayout({
  children,
}: {
  children: React.ReactNode; // Page content goes here
}) {
  return (
    <html lang="en">
      <body>{children}</body> {/* Page content will render inside <body> */}
    </html>
  );
}
