import "./globals.css";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vertical AI Growth System - Reclaim 20+ Hours Per Week",
  description: "Stop wasting time with generic chatbots and disconnected tools. We build complete AI Growth Systems, exclusively for your industry, that automate client acquisition, operations, and compliance so you can focus on scaling your business.",
  openGraph: {
    title: "Vertical AI Growth System - Reclaim 20+ Hours Per Week",
    description: "Stop wasting time with generic chatbots and disconnected tools. We build complete AI Growth Systems, exclusively for your industry, that automate client acquisition, operations, and compliance so you can focus on scaling your business.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vertical AI Growth System - Reclaim 20+ Hours Per Week",
    description: "Stop wasting time with generic chatbots and disconnected tools. We build complete AI Growth Systems, exclusively for your industry, that automate client acquisition, operations, and compliance so you can focus on scaling your business.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
