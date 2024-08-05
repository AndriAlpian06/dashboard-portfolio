'use client';
import { Karla } from "next/font/google";
import "./globals.css";
import { SideBar } from "@/components/sidebar"
import Header from "@/components/header";
import PageWrapper from "@/components/pagewrapper";

const karla = Karla({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Dashboard Portfolio</title>
      </head>
      <body className={karla.className}>
        <div className="flex min-h-screen">
          <SideBar></SideBar>
          <Header></Header>
          <PageWrapper children={children}>
          </PageWrapper>
        </div>
      </body>
    </html>
  );
}
