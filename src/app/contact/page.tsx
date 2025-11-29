import Section from "../components/Section";
import { personalInfo } from "../../data/content";
import { Mail, MapPin, Clock, Github, Linkedin, Twitter, CheckCircle2 } from "lucide-react";

export default function Contact() {
  return (
    <div className="pt-24 pb-12">
      <Section 
        title="Get in Touch" 
        subtitle="I'm currently open to new opportunities and collaborations."
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Contact Info Column */}
          <div className="lg:col-span-1 space-y-8">
            <div className="card">
              <h3 className="text-lg font-bold mb-6">Contact Details</h3>
              
              <div className="space-y-6">
                <a href={`mailto:${personalInfo.email}`} className="flex items-start gap-4 group">
                  <div className="p-3 bg-red-50 text-primary rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-stone-500 mb-1">Email</p>
                    <p className="text-stone-900 font-medium break-all">{personalInfo.email}</p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-stone-50 text-stone-600 rounded-lg">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-stone-500 mb-1">Location</p>
                    <p className="text-stone-900 font-medium">{personalInfo.location}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-stone-50 text-stone-600 rounded-lg">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-stone-500 mb-1">Timezone</p>
                    <p className="text-stone-900 font-medium">{personalInfo.timezone}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-stone-200">
                <h4 className="text-sm font-bold uppercase tracking-wider text-stone-500 mb-4">Connect</h4>
                <div className="flex gap-4">
                  <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer" className="p-2 text-stone-500 hover:text-primary hover:bg-red-50 rounded-full transition-colors">
                    <Github size={20} />
                  </a>
                  <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 text-stone-500 hover:text-primary hover:bg-red-50 rounded-full transition-colors">
                    <Linkedin size={20} />
                  </a>
                  <a href={personalInfo.social.twitter} target="_blank" rel="noopener noreferrer" className="p-2 text-stone-500 hover:text-primary hover:bg-red-50 rounded-full transition-colors">
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Information Column */}
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">Availability & Collaboration</h3>
              <p className="text-lg text-stone-600 mb-6">
                I specialize in building complex, high-performance applications. Whether you need a Senior Software Engineer to lead a team, or an expert to architect a scalable solution, I can help.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Senior Software Engineer Roles",
                  "Full-stack Development (React/Node)",
                  "Flutter Mobile Architecture",
                  "Cloud & Serverless Consulting",
                  "Technical Mentoring",
                  "Open Source Contributions"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 p-3 bg-stone-50 rounded-lg border border-stone-100">
                    <CheckCircle2 size={18} className="text-green-500 flex-shrink-0" />
                    <span className="font-medium text-stone-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">What to include in your message</h3>
              <div className="bg-stone-50 border border-stone-200 rounded-lg p-6">
                <ul className="list-disc list-inside space-y-2 text-stone-600">
                  <li>Brief description of the opportunity or project</li>
                  <li>Timeline and scope expectations</li>
                  <li>Tech stack details (especially React, Node.js, Flutter, Cloud)</li>
                  <li>Compensation range or budget</li>
                  <li>How you found my portfolio</li>
                </ul>
              </div>
            </div>
            
            <div className="flex justify-center md:justify-start">
               <a href={`mailto:${personalInfo.email}`} className="btn btn-primary text-lg px-8 py-4 shadow-lg shadow-red-500/20">
                 Send Me an Email
               </a>
            </div>
          </div>
          
        </div>
      </Section>
    </div>
  );
}
