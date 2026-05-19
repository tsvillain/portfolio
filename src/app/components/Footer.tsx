import Link from "next/link";
import { personalInfo } from "../../data/content";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <p className="footer-tag">
          Building production systems. <em>One ship at a time.</em>
        </p>
        <div className="footer-links">
          <Link href="/work">Experience</Link>
          <Link href="/portfolio">Work</Link>
          <Link href="/articles">Writing</Link>
          <Link href="/recommendations">Refs</Link>
          <Link href="/contact">Contact</Link>
          <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={personalInfo.social.twitter} target="_blank" rel="noopener noreferrer">
            X
          </a>
        </div>
        <p className="footer-meta">
          © {new Date().getFullYear()} {personalInfo.name} · built in india · shipped
          on weekdays
        </p>
      </div>
    </footer>
  );
}
