import Section from "../components/Section";
import { personalInfo } from "../../data/content";

export default function Contact() {
  return (
    <div className="pt-20">
      <Section title="Contact" subtitle="Let's work together">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card">
            <div className="card-title">Get in touch</div>
            <div className="space-y-4 mt-4">
              <div>
                <strong>Email:</strong>
                <br/>
                <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
              </div>
              <div>
                <strong>Location:</strong>
                <br/>
                <span>{personalInfo.location}</span>
              </div>
              <div>
                <strong>Timezone:</strong>
                <br/>
                <span>{personalInfo.timezone}</span>
              </div>
            </div>
            <div className="mt-6 flex gap-2">
              <a href={personalInfo.social.github} className="tag">Github</a>
              <a href={personalInfo.social.linkedin} className="tag">Linkedin</a>
            </div>
          </div>
          
          <div className="card-flat mint-bg">
            <div className="card-title">Skills</div>
            <div className="grid grid-cols-2 gap-2 mt-4">
              {["Full-Stack Dev", "Flutter Mobile", "Node.js", "Cloud", "Stripe", "AI/ML"].map(item => (
                <div key={item} className="tag">{item}</div>
              ))}
            </div>
          </div>
        </div>
        
        <a href={`mailto:${personalInfo.email}`} className="btn btn-primary mt-8">Send Email</a>
      </Section>
    </div>
  );
}