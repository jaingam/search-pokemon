import type { Metadata } from "next";
import { Jersey_10 } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const jersey = Jersey_10({
  weight: "400",
  variable: "--font-jersey-10",
  style: "normal",
  preload: true,
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pokémon Search",
  description: "Search a Pokémon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body
        className={`antialiased ${jersey.className}`}
      > 
      {/* <ApolloWrapper> */}
          {children}
        {/* </ApolloWrapper> */}
      </body>

    </html>
  );
}
