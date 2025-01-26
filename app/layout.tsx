import type { Metadata } from "next";
import "./globals.css";
import "./all.min.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Dynamic Power Tools by @dhitznswa",
    default: "Dynamic Power Tools by @dhitznswa",
  },
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`font-space antialiased`} translate="no">
        {children}
      </body>
    </html>
  );
}
