import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
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
  metadataBase: new URL("https://www.devsoumyajit.in"),
  alternates: {
    canonical: "/",
  },
  title: "Soumyajit Khan — Full Stack Developer & AI Engineer",
  description:
    "Results-driven Full Stack Developer building scalable AI-powered web applications, REST APIs, and backend systems. Skilled in Next.js, React, Node.js, LangChain, Docker, and modern DevOps workflows.",
  icons: {
    icon: "/favicon.svg",
  },
  keywords: [
    "Soumyajit Khan",
    "Full Stack Developer",
    "AI Engineer",
    "MERN Stack",
    "Next.js",
    "React",
    "Node.js",
    "LangChain",
    "RAG",
    "Docker",
    "DevOps",
    "Portfolio",
  ],
  authors: [{ name: "Soumyajit Khan" }],
  creator: "Soumyajit Khan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.devsoumyajit.in",
    title: "Soumyajit Khan — Full Stack Developer & AI Engineer",
    description:
      "Building scalable AI-powered web applications and backend systems.",
    siteName: "Soumyajit Khan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Soumyajit Khan — Full Stack Developer & AI Engineer",
    description:
      "Building scalable AI-powered web applications and backend systems.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  );
}
