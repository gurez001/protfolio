"use client";

import { ReactNode } from "react";
import { Inter } from "next/font/google";

import "./globals.css";  // Global CSS file
import { Toaster } from 'react-hot-toast';
import Header from "@/module/layout/header/Header";
import Footer from "@/module/layout/footer/Footer";

// Font configuration (optional)
const inter = Inter({ subsets: ["latin"] });
interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Toaster
        />
        <Footer/>
      </body>
    </html>
  );
}
