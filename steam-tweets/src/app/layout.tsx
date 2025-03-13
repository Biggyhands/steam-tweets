import type { Metadata } from "next";
import { UserProvider } from "./context/UserContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ReactQueryProvider } from "./lib/react-query";

import "./globals.css";

export const metadata: Metadata = {
  title: "Steam Tweets",
  description:
    "This project was developed as part of a technical assessment for a Frontend Developer position. It leverages Next.js to create a simplified, Steam-inspired web application.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>
          <UserProvider>
            <Header />

            {children}

            <Footer />
          </UserProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
