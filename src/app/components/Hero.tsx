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
            <p className="font-bold mb-2">{personalInfo.role}</p>
            <h1 className="mb-4">{personalInfo.name}</h1>
            <p className="text-lg mb-6">{personalInfo.about}</p>
            
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <Link href="/portfolio" className="btn btn-primary">
                View Work <ArrowRight className="ml-2" size={18} />
              </Link>
              <Link href="/contact" className="btn btn-outline">
                Contact
              </Link>
            </div>

            <div className="flex gap-3">
              <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer">
                <Github size={22} />
              </a>
              <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin size={22} />
              </a>
            </div>
          </div>
          
          <div className="w-56 h-56 md:w-72 md:h-72 shrink-0" 
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