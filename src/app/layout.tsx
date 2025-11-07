import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Future Media Namibia | Leading Media Holdings Group",
  description: "Namibia's multi-platform media powerhouse — reach every audience with confident, data-driven broadcast and digital solutions. Operating Radiowave, Omulunga Radio, Fresh FM, Nova 103.5, 99FM/OneAfrica and Future Media News.",
  keywords: ["Future Media", "Namibia", "Radio", "Broadcast", "Digital Media", "Advertising", "Radiowave", "Omulunga", "Fresh FM", "Nova 103.5", "99FM", "OneAfrica"],
  authors: [{ name: "Future Media Namibia" }],
  openGraph: {
    title: "Future Media Namibia | Leading Media Holdings Group",
    description: "Namibia's multi-platform media powerhouse with nationwide reach across radio, digital, and broadcast platforms.",
    type: "website",
    locale: "en_NA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Future Media Namibia",
    description: "Namibia's multi-platform media powerhouse",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
