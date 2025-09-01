import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tekeshwar Singh - Senior Software Engineer Portfolio",
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
        <nav>
          <div className="container">
            <div className="nav-title">PORTFOLIO SYSTEM v1.0</div>
            <ul>
              <li>
                <a href="/">HOME</a>
              </li>
              <li>
                <a href="/work">WORK EXPERIENCE</a>
              </li>
              <li>
                <a href="/portfolio">PORTFOLIO</a>
              </li>
              <li>
                <a href="/recommendations">RECOMMENDATIONS</a>
              </li>
              <li>
                <a href="/articles">TECH ARTICLES</a>
              </li>
              <li>
                <a href="/contact">CONTACT</a>
              </li>
            </ul>
          </div>
        </nav>
        <main>
          <div className="container">{children}</div>
        </main>
      </body>
    </html>
  );
}
