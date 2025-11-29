import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { personalInfo } from '../../data/content';
import { ArrowRight, Github, Linkedin, Terminal } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 max-w-4xl">
            <div className="flex items-center gap-3 mb-6 text-primary font-medium bg-red-50 w-fit px-4 py-2 rounded-full">
              <Terminal size={18} />
              <span>{personalInfo.role}</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 text-stone-900">
              Architecting <span className="text-primary">end-to-end applications</span> for web, mobile, and backend platforms.
            </h1>
            
            <p className="text-lg md:text-xl text-stone-600 mb-10 max-w-3xl leading-relaxed">
              {personalInfo.about}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/portfolio" className="btn btn-primary text-lg px-8 py-4">
                View My Work <ArrowRight className="ml-2" size={20} />
              </Link>
              
              <Link href="/contact" className="btn btn-outline text-lg px-8 py-4">
                Get in Touch
              </Link>
            </div>

            <div className="mt-12 flex gap-6 text-stone-500">
              <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Github size={24} />
              </a>
              <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
          
            <div className="relative w-64 h-64 md:w-80 md:h-80 shrink-0">
            <Image
              src={personalInfo.headshot}
              alt="Headshot"
              fill
              className="object-cover rounded-full border-4 border-white shadow-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
