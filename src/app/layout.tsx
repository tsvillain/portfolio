import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/Navigation";

export const metadata: Metadata = {
  title: "Tekeshwar Singh",
  description: "Software Engineer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var d=localStorage.getItem('design')||'minimal';document.documentElement.setAttribute('data-design',d);}catch(e){}})();`,
          }}
        />
      </head>
      <body className="scanlines">
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}