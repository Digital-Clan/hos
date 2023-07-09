"use client";

import { Nav, Footer } from "./components/Common";
import { createClient } from "@supabase/supabase-js";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import "./globals.css";

const supabase = createClient(
  "https://hsqdaxqgjvpftvisvazo.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhzcWRheHFnanZwZnR2aXN2YXpvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg3NzkyNzksImV4cCI6MjAwNDM1NTI3OX0.VcYO3Yvt2XhSffNmwRSiDusjYcRziaCVXE2JXyFm-uI"
);

// const CDNURL = "https://hsqdaxqgjvpftvisvazo.supabase.in/storage/v1/object/public/videos";

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
