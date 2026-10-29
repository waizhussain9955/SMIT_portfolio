import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Waiz Hussain — Full Stack Developer & AI Builder",
  description:
    "Full Stack Developer and AI Builder based in Pakistan. Specializing in Autonomous Systems, SaaS products, Next.js, Flutter, and Node.js.",
  keywords: [
    "Waiz Hussain",
    "Full Stack Developer",
    "AI Builder",
    "Autonomous Systems",
    "Next.js Developer",
    "Flutter Developer",
    "Pakistan Software Engineer",
    "SaaS Developer",
  ],
  authors: [{ name: "Waiz Hussain" }],
  creator: "Waiz Hussain",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://waiz.dev",
    title: "Waiz Hussain — Full Stack Developer & AI Builder",
    description:
      "I build real-world applications across web, mobile, and AI domains using Next.js, Flutter & Node.js.",
    siteName: "Waiz Hussain Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Waiz Hussain — Full Stack Developer & AI Builder",
    description:
      "Full Stack Developer & AI Builder specializing in Autonomous Systems, Next.js, and Flutter.",
    creator: "@waizhussain",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Waiz Hussain",
    jobTitle: "Full Stack Developer & AI Builder",
    url: "https://waiz.dev",
    address: {
      "@type": "PostalAddress",
      addressCountry: "PK",
    },
    sameAs: [
      "https://github.com/waizhussain9955",
      "https://www.linkedin.com/in/waiz-hussain-6750392ba",
      "https://x.com/waizhussain",
    ],
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} antialiased min-h-screen flex flex-col`}>
        <Navbar />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
