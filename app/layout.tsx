import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Orion Systems",
  description: "Intelligent Digital Systems for Publishing",
      viewport: "width=device-width, initial-scale=1",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

