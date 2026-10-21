import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: 'A box in microdegrees',
  description: 'Inside or outside a box. Not a map, and the box does not cross 180 degrees.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
