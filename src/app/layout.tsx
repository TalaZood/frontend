import OnboardingLogic from "@/components/OnboardingLogic";
import "./globals.css";
import Providers from "@/providers";
import type { Metadata, Viewport } from "next";
import { Vazirmatn } from "next/font/google";

const vazirSans = Vazirmatn({
  subsets: ["arabic"],
});

export const metadata: Metadata = {
  title: "طلا زود",
  description: "",
};

export const viewport: Viewport = {
  minimumScale: 1,
  initialScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html dir="rtl" lang="fa-IR">
      <body className={`${vazirSans.className} antialiased`}>
        <Providers>
          <OnboardingLogic>{children}</OnboardingLogic>
        </Providers>
      </body>
    </html>
  );
}
