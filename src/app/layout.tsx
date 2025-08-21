import type { Metadata } from "next";
import { Playfair_Display, Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { TrustBar } from "@/components/layout/TrustBar";
import { FloatingTrustBadge } from "@/components/ui/TrustSignalsBar";
import { ChatWidget } from "@/components/ui/ChatWidget";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Solution 2 Properties | We Buy Houses Fast for Cash",
  description: "Sell your house fast for cash in any condition. Licensed real estate investors offering fair cash offers with quick closings. No fees, no repairs needed.",
  keywords: "sell house fast, cash home buyers, we buy houses, sell my house, quick closing, no realtor fees",
  authors: [{ name: "Solution 2 Properties LLC" }],
  creator: "Solution 2 Properties LLC",
  publisher: "Solution 2 Properties LLC",
  openGraph: {
    title: "Solution 2 Properties | We Buy Houses Fast for Cash",
    description: "Sell your house fast for cash in any condition. Licensed real estate investors offering fair cash offers with quick closings.",
    type: "website",
    locale: "en_US",
    siteName: "Solution 2 Properties",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solution 2 Properties | We Buy Houses Fast for Cash",
    description: "Sell your house fast for cash in any condition. Licensed real estate investors offering fair cash offers with quick closings.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} ${montserrat.variable} font-sans antialiased`}>
        <TrustBar />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <FloatingTrustBadge />
        <ChatWidget />
      </body>
    </html>
  );
}
