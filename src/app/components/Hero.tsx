import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { personalInfo } from '../../data/content';
import { ArrowRight, Github, Linkedin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container py-20">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="hero-content max-w-xl">
            <p className="font-bold mb-2 brutal-only">{personalInfo.role}</p>
            <h1 className="mb-4">{personalInfo.name}</h1>
            <p className="text-lg mb-6 brutal-only">{personalInfo.about}</p>

            <div className="minimal-intro">
              <p className="lead">
                Senior Software Engineer building <strong>web, mobile, and backend</strong> systems.
                5+ years shipping full-stack products — payments infrastructure,
                AI search pipelines, multi-tenant SaaS, and offline-first mobile apps.
              </p>
              <p>
                I&apos;m currently at{' '}
                <a href="https://www.xfarm.ag/en" target="_blank" rel="noopener noreferrer">
                  xFarm Technologies
                </a>
                , building cross-platform Flutter apps for a farm management platform serving
                600,000+ farms across 14M+ hectares.
              </p>
              <p>
                Previously at{' '}
                <a href="https://breakthroughapps.io/" target="_blank" rel="noopener noreferrer">
                  Breakthrough
                </a>
                , I owned the backend platform powering a white-label wellness app used by
                130+ partner creators — Stripe billing on AWS ECS, AI semantic search on
                Vertex AI, and a Next.js paywall serving 60+ brands from one codebase.
                Before that,{' '}
                <a href="https://pixelapps.io/" target="_blank" rel="noopener noreferrer">
                  PixelApps
                </a>
                {' '}and{' '}
                <a href="https://www.lingopanda.app/" target="_blank" rel="noopener noreferrer">
                  Pingolearn
                </a>.
              </p>
              <p>
                On the side I build open source — most recently{' '}
                <a href="https://www.pglens.org/" target="_blank" rel="noopener noreferrer">
                  pglens
                </a>
                , a PostgreSQL viewer, and{' '}
                <a href="https://github.com/tsvillain/Wallbay" target="_blank" rel="noopener noreferrer">
                  Wallbay
                </a>
                , a Flutter wallpaper app with 114+ stars on GitHub.
              </p>
              <p>
                Find me on{' '}
                <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer">GitHub</a>,{' '}
                <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>,{' '}
                <a href={personalInfo.social.twitter} target="_blank" rel="noopener noreferrer">Twitter</a>,
                or email <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mb-6 brutal-only">
              <Link href="/portfolio" className="btn btn-primary">
                View Work <ArrowRight className="ml-2" size={18} />
              </Link>
              <Link href="/contact" className="btn btn-outline">
                Contact
              </Link>
            </div>

            <div className="flex gap-3 brutal-only">
              <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer">
                <Github size={22} />
              </a>
              <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin size={22} />
              </a>
            </div>
          </div>

          <div className="w-56 h-56 md:w-72 md:h-72 shrink-0 brutal-only"
               style={{border: '3px solid black', boxShadow: '6px 6px 0 black'}}>
            <Image
              src={personalInfo.headshot}
              alt="Headshot"
              width={288}
              height={288}
              style={{objectFit: 'cover'}}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}