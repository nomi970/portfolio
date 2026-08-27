import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Numan Arshad | Associate Software Engineer & Frontend Specialist",
  description:
    "Portfolio of Numan Arshad, Associate Software Engineer & Frontend Specialist with 3+ years of experience building modern, responsive, high-performance web applications using React.js, Next.js, TypeScript, and Tailwind CSS.",
  keywords: [
    "Numan Arshad",
    "Frontend Engineer",
    "Associate Software Engineer",
    "React.js Developer",
    "Next.js Specialist",
    "TypeScript Developer",
    "Tailwind CSS Specialist",
    "Zapta Technologies",
    "Web Developer Portfolio",
    "Pakistan Frontend Engineer",
    "Remote Developer",
  ],
  authors: [{ name: "Numan Arshad", url: "https://github.com/nomi970" }],
  openGraph: {
    title: "Numan Arshad | Associate Software Engineer & Frontend Specialist",
    description:
      "Explore 15+ production projects, interactive KPI dashboards, AI web apps, and personal portfolio of Numan Arshad.",
    type: "website",
    locale: "en_US",
    siteName: "Numan Arshad Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Numan Arshad | Associate Software Engineer",
    description:
      "Associate Software Engineer specializing in React, Next.js, TypeScript & Tailwind CSS.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans bg-[var(--background)] text-[var(--foreground)] antialiased selection:bg-cyan-500/20 selection:text-cyan-400`}
      >
        <Providers>
          <div className="relative flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
