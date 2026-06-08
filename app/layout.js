import "./globals.css";

export const metadata = {
  title: "Nourin Portfolio",
  description: "Cybersecurity Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}