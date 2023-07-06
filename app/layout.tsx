// "use client";

import { Nav, Footer } from "./components/Common";
// import { SessionProvider } from "next-auth/react";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // <SessionProvider refetchInterval={60}>
    <html lang="en">
      <head>
        <meta name="theme-color" content="#304098" />
      </head>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
    // </SessionProvider>
  );
}
