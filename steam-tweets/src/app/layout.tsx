import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { TanstackProvider } from "@/lib/providers/Tanstack-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Steam Tweets",
  description:
    "This project was developed as part of a technical assessment for a Frontend Developer position. It leverages Next.js to create a simplified, Steam-inspired web application.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <TanstackProvider>
          <Header />

          {children}

          <Footer />
        </TanstackProvider>
      </body>
    </html>
  );
}
