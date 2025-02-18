import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import NavBar from "@/components/navbar/NavBar";
import "./globals.scss";
import FloatingPromo from "@/components/floatingPromo/FloatingPromo";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RYIT - Start Journey",
  description: "Where technology meets innovation and excellence",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <FloatingPromo />
        <NavBar />
        {children}
      </body>
    </html>
  );
}
