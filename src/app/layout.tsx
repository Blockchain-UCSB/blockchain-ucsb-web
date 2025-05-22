import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Antic } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const antic = Antic({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Blockchain at UCSB",
  description: "Blockchain at UCSB is a student organization dedicated to fostering education, innovation, and community around blockchain technology. We host workshops, speaker events, and collaborative projects for students of all backgrounds. Join us to learn, build, and connect!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${antic.className} antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
