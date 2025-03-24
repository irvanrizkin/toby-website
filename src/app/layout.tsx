import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {
  libreBaskerville,
  mourich,
  rocaOne,
  theYoungest,
} from "@/lib/fonts/fonts";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${libreBaskerville.variable} ${theYoungest.variable} ${mourich.variable} ${rocaOne.variable} antialiased`}
      >
        <div className="bg-toby-frosted-pearl flex flex-col min-h-screen h-full">
          {/* Change with navbar later */}
          <div className="flex justify-center items-center h-[93px] lg:h-[118px] mt-[42px] mb-7 mx-[46px]">
            <h1 className="font-mourich text-3xl font-bold text-toby-black">
              TOBY HOLDINGS
            </h1>
          </div>
          <main className="mb-7 mx-8">{children}</main>
          {/* Change with footer later */}
          <div className="text-toby-black bg-toby-forest-ash">Footer</div>
        </div>
      </body>
    </html>
  );
}
