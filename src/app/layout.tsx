import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import Navigation from "./components/Navigation";

export const metadata: Metadata = {
  title: "Tekeshwar Singh - Senior Software Engineer",
  description:
    "Senior Software Engineer with 5+ years of experience in full-stack development, Flutter, Node.js, and serverless architectures. Specializing in mobile and web development, cloud platforms, and scalable systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Navigation />
          <main>
            <div className="container">{children}</div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
