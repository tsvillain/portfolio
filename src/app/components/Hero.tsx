import React from "react";
import { personalInfo } from "../../data/content";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <p className="eyebrow">Available · {personalInfo.location}</p>

        <h1 className="hero-title" style={{ marginTop: "1rem" }}>
          Production systems for <em>web, mobile, and backend.</em>
        </h1>

        <p className="lede">
          I&apos;m {personalInfo.name} — a Senior Software Engineer with 5+ years
          shipping full-stack products. Payments infrastructure, AI search
          pipelines, multi-tenant SaaS, and offline-first mobile apps.
        </p>

        <p className="lede">
          Currently at{" "}
          <a href="https://www.xfarm.ag/en" target="_blank" rel="noopener noreferrer">
            xFarm Technologies
          </a>
          , building Flutter apps for a farm management platform serving 600,000+
          farms across 14M+ hectares. Previously{" "}
          <a href="https://breakthroughapps.io/" target="_blank" rel="noopener noreferrer">
            Breakthrough
          </a>{" "}
          (Stripe billing on AWS ECS, AI semantic search on Vertex AI, Next.js
          paywall serving 60+ brands),{" "}
          <a href="https://pixelapps.io/" target="_blank" rel="noopener noreferrer">
            PixelApps
          </a>
          , and{" "}
          <a href="https://www.lingopanda.app/" target="_blank" rel="noopener noreferrer">
            Pingolearn
          </a>
          .
        </p>

        <p className="lede">
          On the side I ship open source — most recently{" "}
          <a href="https://www.pglens.org/" target="_blank" rel="noopener noreferrer">
            pglens
          </a>
          , a PostgreSQL viewer, and{" "}
          <a href="https://github.com/tsvillain/Wallbay" target="_blank" rel="noopener noreferrer">
            Wallbay
          </a>
          , a Flutter wallpaper app with 114+ GitHub stars.
        </p>

        <p className="lede">
          Find me on{" "}
          <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          ,{" "}
          <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          ,{" "}
          <a href={personalInfo.social.twitter} target="_blank" rel="noopener noreferrer">
            X
          </a>
          , or email{" "}
          <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>.
        </p>
      </div>
    </section>
  );
}
