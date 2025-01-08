import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Sysneom - Empowering Digital Innovation",
  description:
    "Sysneom delivers cutting-edge AI, cloud, and digital transformation solutions to accelerate your business growth.",
  keywords:
    "Sysneom, AI solutions, cloud services, digital transformation, business innovation",
  authors: [{ name: "Sysneom" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.sysneom.com",
    siteName: "Sysneom",
    title: "Sysneom - Empowering Digital Innovation",
    description:
      "Sysneom delivers cutting-edge AI, cloud, and digital transformation solutions to accelerate your business growth.",
    images: [
      {
        url: "https://www.sysneom.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sysneom - Empowering Digital Innovation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sysneom - Empowering Digital Innovation",
    description:
      "Sysneom delivers cutting-edge AI, cloud, and digital transformation solutions to accelerate your business growth.",
    images: ["https://www.sysneom.com/twitter-image.jpg"],
    creator: "@sysneom",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-grow">
          {" "}
          <NextTopLoader
            color="hsl(var(--primary))"
            initialPosition={0.08}
            crawlSpeed={200}
            height={3}
            crawl={true}
            showSpinner={false}
            easing="ease"
            speed={200}
            shadow="0 0 10px hsl(var(--primary)), 0 0 5px hsl(var(--primary))"
            template='<div class="bar" role="bar"><div class="peg"></div></div> 
        <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
            zIndex={1600}
            showAtBottom={false}
          />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
