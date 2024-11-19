import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navabar from "@/components/Navbar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footerr";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Travel",
  description: "Travel UI /UX App for Camping",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <Navbar/>
        {children}
       <main className="relative overflow-hidden"  ></main> 
     <Footer/>
      </body>
    </html>
  );
}
