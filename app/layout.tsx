import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from '../lib/registry'
import Header from "@/components/header/header";
import { Footer } from "@/components/_footer/footer";
import Navbar from "@/components/_home/navbar/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <StyledComponentsRegistry>
          <Header/>
          <Navbar/>
          {children}
          <Footer/>
          </StyledComponentsRegistry>
      </body>
    </html>
  )
}
