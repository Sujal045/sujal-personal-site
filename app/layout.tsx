
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sujal Prajapati — Coming Soon",
  description:
    "A personal space by Sujal Prajapati. Building things, exploring ideas, and more coming soon.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
