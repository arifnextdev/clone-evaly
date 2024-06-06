import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./Components/Header";
import SubHeader from "./Components/SubHeader";
import Footer from "./Components/Footer";
import FixedHeader from "./(home)/_components/FixedHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Evaly | Shop",
  description: "Ecommerce Shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <FixedHeader />
        <main className="mt-[100px] md:mt-[200px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
