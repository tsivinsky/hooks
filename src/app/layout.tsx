import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { LayoutProps } from "@/types/next";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import { Header } from "@/components/Header";
import { clsx } from "clsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "hooks",
  description: "React hooks for some use cases",
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body
        className={clsx(
          inter.className,
          "min-h-screen flex flex-col bg-neutral-800"
        )}
      >
        <Toaster
          toastOptions={{ className: "!bg-neutral-700 !text-neutral-100" }}
        />
        <Header />
        <main className="flex-1 max-w-screen-2xl mx-auto w-full px-2">
          {children}
        </main>
      </body>
    </html>
  );
}
