import "./globals.css";
import Script from "next/script";
import Providers from "@/providers";
import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";

const vazirSans = Vazirmatn({
  subsets: ["arabic"],
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
  return (
    <html dir="rtl" lang="fa-IR">
      <body className={`${vazirSans.className} antialiased`}>
        <Providers>{children}</Providers>
        <Script src="https://developer.eitaa.com/eitaa-web-app.js" async />
      </body>
    </html>
  );
}
