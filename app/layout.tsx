import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "LexLegal Law Group",
  description:
    "Providing expert legal services for individuals and businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="myfont">
      <body className={`myfont `}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
