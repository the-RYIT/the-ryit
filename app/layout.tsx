import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import NavBar from "@/components/navbar/NavBar";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RYATM - Start Journey",
  description: "Transforming yourself through technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />

        {children}
      </body>
    </html>
  );
}
