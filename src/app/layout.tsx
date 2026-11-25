import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./home.css";
import { inter, spaceGrotesk } from "@/fonts/fonts";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeContextProvider } from "@/context/ThemeContext";


export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Timothy Attah | Full-Stack Developer",
    template: "%s | Timothy Attah",
  },
  description:
    "Full-stack developer specializing in modern web applications, premium websites, React, Next.js, TypeScript, and scalable digital experiences.",
  keywords: [
    "Timothy Attah",
    "Full Stack Developer",
    "Frontend Developer",
    "Web Developer Nigeria",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Portfolio Website",
    "UI Developer",
  ],
  authors: [{ name: "Timothy Attah" }],
  creator: "Timothy Attah",
  metadataBase: new URL("https://timothy-attah.vercel.app"),
  openGraph: {
    title: "Timothy Attah | Full-Stack Developer",
    description:
      "Building premium websites and modern web applications with React, Next.js, TypeScript, and scalable technologies.",
    url: "https://timothy-attah.vercel.app",
    siteName: "Timothy Attah Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Timothy Attah | Full-Stack Developer",
    description:
      "Building premium websites and modern web applications with React, Next.js, TypeScript, and scalable technologies.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        <ThemeContextProvider>
          <Header />
          {children}
          <Footer />
        </ThemeContextProvider>
      </body>
    </html>
  );
}
