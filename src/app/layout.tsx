import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CompanyProvider } from "@/context/CompanyContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Modular System",
  description: "Sistema personalizado para sua empresa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CompanyProvider>
          {children}
        </CompanyProvider>
      </body>
    </html>
  );
}
