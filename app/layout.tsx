import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import AuthProvider from "./AuthProvider";

const montserrat = Montserrat({ subsets: ["latin-ext"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <html lang="en">
        <body className={montserrat.className}>{children}</body>
      </html>
    </AuthProvider>
  );
}
