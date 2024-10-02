import type { Metadata } from "next";
import { Press_Start_2P } from "next/font/google";
import "./globals.css";
import StarsCanvas from "./components/main/StarBackground";

const pressStart = Press_Start_2P({
  subsets: ['latin'],
  weight: '400',
});

export const metadata: Metadata = {
  title: "Samyuktha 8.0",
  description: "Samyuktha 8.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return  (
    <html lang="en">
      <body
        className={`${pressStart.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas/>
        
        {children}
        
      </body>
    </html>
  );
}
