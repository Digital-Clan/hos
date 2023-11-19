"use client";

import { Nav, Footer } from "./components/Common";
import { createClient } from "@supabase/supabase-js";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import "./globals.css";

const supabase = createClient(
  "https://uwrsatwdjtovvfukhzmg.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV3cnNhdHdkanRvdnZmdWtoem1nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA0MTY1ODIsImV4cCI6MjAxNTk5MjU4Mn0.RgPEFIRas4NBPYN-1lJvJtb_nPd3n5GWGK4mxH3iDZg"
);

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <SessionContextProvider supabaseClient={supabase}>
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
    </SessionContextProvider>
  );
}
