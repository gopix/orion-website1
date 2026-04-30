import './globals.css';

export const metadata = {
  title: "Orion Systems",
  description: "Intelligent Digital Systems for Publishing"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
