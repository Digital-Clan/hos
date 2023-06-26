import { Nav, Footer } from "./components/Common";
import "./globals.css";

export const metadata = {
  title: "Hour of Solution",
  description: "",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#304098" />
        {/* <link rel="icon" href="/favicon.ico" sizes="any" /> */}
      </head>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
