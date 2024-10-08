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
      <body className={`bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
        <StarsCanvas />

        <Providers>
          <Suspense fallback={<Loader />}>{children}</Suspense>
        </Providers>
      </body>
    </html>
  );
}
