import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google"; // Keeping imports if needed later, but using system fonts for now as per globals.css or can re-enable
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "KSP Explorer – Stock Sonnensystem",
  description: "Interaktive Webseite über das Kerbal Space Program Sonnensystem",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`antialiased flex flex-col min-h-screen bg-background text-foreground`}
      >
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
