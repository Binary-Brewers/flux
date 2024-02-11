import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
import { Inter } from "next/font/google";
import "./globals.css";
import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Flux Language App</title>
        <meta name="description" content="Snap a picture and translate all objects within!" />
      </Head>
      <body className={inter.className}>
        <Navbar /> {/* Including the Navbar here */}
        <div>{children}</div> {/* Wrapping children in a div for a valid React structure */}
      </body>
    </html>
  );
}
