import type { Metadata } from "next";
import { Press_Start_2P } from "next/font/google";
import "./globals.css";
import StarsCanvas from "./components/main/StarBackground";
import "./index.css";
import { Provider } from "react-redux";
import { Store } from "./context/store/store";
import Providers from "./context/provider/provider";
import { Suspense } from "react";
import Loader from "./components/main/Loader";
import Script from "next/script";

const pressStart = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
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
  return (
    <html lang="en">
      <Script
        defer
        src="https://cloud.umami.is/script.js"
        data-website-id="5d4bfe57-260b-4d6c-af80-d54002c01dce"
      />
      <body className={`bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
        <StarsCanvas />

        <Providers>
          <Suspense fallback={<Loader />}>{children}</Suspense>
        </Providers>
      </body>
    </html>
  );
}
