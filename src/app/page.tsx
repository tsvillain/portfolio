import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>WELCOME TO MY PORTFOLIO</h1>

      <section>
        <h2>ABOUT ME</h2>
        <p>
          Hello! I'm Tekeshwar Singh, a Senior Software Engineer with 5+ years
          of experience architecting and delivering high-impact, full-stack
          applications for mobile and web. I specialize in creating scalable,
          distributed systems using Flutter, Node.js, and serverless
          architectures on AWS and GCP.
        </p>

        <p>
          My journey in technology has been driven by measurable impact - I've
          increased revenue by 30%, boosted developer productivity, and reduced
          time-to-market by 75%. I believe in writing clean, maintainable code
          and staying up-to-date with industry best practices while delivering
          tangible business outcomes across both mobile and web platforms.
        </p>

        <p>
          I'm passionate about full-stack development, cloud architecture, and
          building systems that scale. When I'm not coding, you can find me
          contributing to open-source projects, mentoring junior developers, or
          exploring new technologies that push the boundaries of what's possible
          in mobile and web development.
        </p>
      </section>

      <section>
        <h2>SKILLS & TECHNOLOGIES</h2>
        <ul>
          <li>
            <strong>Languages:</strong> JavaScript, TypeScript, Dart, SQL
          </li>
          <li>
            <strong>Frontend:</strong> React, Next.js, Flutter, Riverpod
          </li>
          <li>
            <strong>Backend:</strong> Node.js, Express.js, REST APIs, Serverless
            Functions
          </li>
          <li>
            <strong>Cloud & DevOps:</strong> AWS, GCP (Serverless), Firebase,
            Docker, GitHub Actions, CodeMagic, CI/CD
          </li>
          <li>
            <strong>Databases & APIs:</strong> MongoDB, Stripe API, OpenAI API,
            PostgreSQL
          </li>
          <li>
            <strong>Tools:</strong> Git
          </li>
        </ul>
      </section>

      <section>
        <h2>WORK EXPERIENCE</h2>
        <div>
          <h3>Senior Software Engineer</h3>
          <p><strong>Breakthrough</strong> - New York, NY (Remote) | July 2023 – Present</p>
          <p>
            Leading full-stack development for mobile and web platforms. Specializing in Flutter, Node.js, 
            and serverless architectures on GCP. Key achievements include 30% revenue increase through 
            subscription systems, 75% reduction in time-to-market, and architecting real-time data 
            synchronization across multiple platforms.
          </p>
        </div>

        <div>
          <h3>Senior Flutter Developer</h3>
          <p><strong>PixelApps</strong> - Ahmedabad, IN (Hybrid) | May 2021 – July 2023</p>
          <p>
            Led mobile development initiatives and established engineering best practices. Co-designed 
            Clean Architecture standards, mentored junior developers, and developed rapid prototyping 
            frameworks that accelerated development lifecycle by 75%.
          </p>
        </div>

        <div>
          <h3>Expert Flutter Developer (Part-Time Contract)</h3>
          <p><strong>Pingolearn</strong> - Pune, IN (Remote) | Feb 2022 – Aug 2022</p>
          <p>
            Developed core features for an AI-powered language application serving 700,000+ users. 
            Implemented subscription systems and AI-powered grammar detection engines using OpenAI integration.
          </p>
        </div>
      </section>

      <section>
        <h2>EDUCATION</h2>
        <p>
          <strong>B.E. in Computer Science</strong>
          <br />
          Parul University, Gujarat, IN
          <br />
          2019 – 2022
          <br />
          Recipient of SOIC Hackathon 2020 project grant
        </p>
        <p>
          <strong>High School Diploma in Computer Science</strong>
          <br />
          Gujarat Technical University, Gujarat, IN
          <br />
          2016 – 2019
          <br />
          1st Runner-up in Prakalp Festival for final year project
        </p>
      </section>

      <section>
        <h2>KEY ACHIEVEMENTS</h2>
        <ul>
          <li>
            Increased revenue by 30% through strategic A/B testing and
            subscription systems
          </li>
          <li>
            Reduced time-to-market by 75% with rapid prototyping frameworks
          </li>
          <li>
            Reduced new project setup time from 4 days to 2 hours with CLI
            automation
          </li>
          <li>
            Tripled user conversion rates through optimized paywall systems
          </li>
          <li>Reduced partner data migration time from weeks to hours</li>
        </ul>
      </section>

      <section>
        <h2>INTERESTS</h2>
        <p>
          I'm passionate about full-stack development, serverless architectures,
          and building scalable systems that can handle millions of users. I
          enjoy working with emerging technologies like AI/ML integration,
          real-time data synchronization, and cross-platform development. I also
          believe in giving back to the community through mentoring, knowledge
          sharing, and contributing to the Flutter, Node.js, and React
          ecosystems.
        </p>
      </section>
    </div>
  );
}
