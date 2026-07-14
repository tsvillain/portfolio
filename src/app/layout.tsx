import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jbmono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tsvillain.com"),
  title: "Tekeshwar Singh",
  description:
    "Senior software engineer shipping production web, mobile, and backend systems: payments infrastructure, AI search, multi-tenant SaaS, offline-first mobile.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Tekeshwar Singh",
    description:
      "Senior software engineer shipping production web, mobile, and backend systems.",
    url: "/",
    siteName: "Tekeshwar Singh",
    type: "website",
    images: ["/headshot.webp"],
  },
  twitter: {
    card: "summary",
    creator: "@tsvillain",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
