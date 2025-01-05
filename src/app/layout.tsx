import Script from "next/script";
import type { Metadata } from "next";
import { isClientSide } from "@/utils/environment";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "طلا زود",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  if (isClientSide()) {
    window.Eitaa.expand();
  }

  return (
    <html dir="rtl" lang="fa-IR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Script src="https://developer.eitaa.com/eitaa-web-app.js" />
      </body>
    </html>
  );
}
