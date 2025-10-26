export default function Home() {
  return (
    <div>
      <h1>whoami</h1>

      <section>
        <h2>about</h2>
        <div className="terminal-card">
          <p>
            Hello! I'm <span className="code">Tekeshwar Singh</span>, a
            Senior Software Engineer with 5+ years of experience
            architecting and delivering high-impact, full-stack applications
            for mobile and web. I specialize in creating scalable,
            distributed systems using <span className="code">Flutter</span>,{" "}
            <span className="code">Node.js</span>, and serverless
            architectures on <span className="code">AWS</span> and{" "}
            <span className="code">GCP</span>.
          </p>
          <p>
            I'm passionate about full-stack development, cloud architecture,
            and building systems that scale. When I'm not coding, you can
            find me contributing to open-source projects, mentoring junior
            developers, or exploring new technologies that push the
            boundaries of what's possible in mobile and web development.
          </p>
        </div>
      </section>

      <section>
        <h2>skills</h2>
        <div className="terminal-card">
          <ul>
            <li>
              <strong>Languages:</strong>{" "}
              <span className="code">JavaScript</span>,{" "}
              <span className="code">TypeScript</span>,{" "}
              <span className="code">Dart</span>,{" "}
              <span className="code">SQL</span>
            </li>
            <li>
              <strong>Frontend:</strong> <span className="code">React</span>,{" "}
              <span className="code">Next.js</span>,{" "}
              <span className="code">Flutter</span>,{" "}
              <span className="code">Riverpod</span>
            </li>
            <li>
              <strong>Backend:</strong> <span className="code">Node.js</span>,{" "}
              <span className="code">Express.js</span>,{" "}
              <span className="code">REST APIs</span>,
              <span className="code">Serverless Functions</span>
            </li>
            <li>
              <strong>Cloud & DevOps:</strong> <span className="code">AWS</span>
              , <span className="code">GCP</span>,{" "}
              <span className="code">Firebase</span>,
              <span className="code">Docker</span>,{" "}
              <span className="code">GitHub Actions</span>,{" "}
              <span className="code">CI/CD</span>
            </li>
            <li>
              <strong>Databases & APIs:</strong>{" "}
              <span className="code">MongoDB</span>,{" "}
              <span className="code">Stripe API</span>,{" "}
              <span className="code">OpenAI API</span>,{" "}
              <span className="code">PostgreSQL</span>
            </li>
            <li>
              <strong>Tools:</strong> <span className="code">Git</span>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2>experience</h2>
        <div className="work-item">
          <h3>Senior Software Engineer</h3>
          <p className="work-company">
            <strong>Breakthrough</strong> - New York, NY (Remote) | July 2023 –
            Present
          </p>
          <p>
            Leading full-stack development for mobile and web platforms.
            Specializing in <span className="code">Flutter</span>,{" "}
            <span className="code">Node.js</span>, and serverless architectures
            on
            <span className="code">GCP</span>. Key achievements include 30%
            revenue increase through subscription systems, 75% reduction in
            time-to-market, and architecting real-time data synchronization
            across multiple platforms.
          </p>
        </div>

        <div className="work-item">
          <h3>Senior Flutter Developer</h3>
          <p className="work-company">
            <strong>PixelApps</strong> - Ahmedabad, IN (Hybrid) | May 2021 –
            July 2023
          </p>
          <p>
            Led mobile development initiatives and established engineering best
            practices. Co-designed Clean Architecture standards, mentored junior
            developers, and developed rapid prototyping frameworks that
            accelerated development lifecycle by 75%.
          </p>
        </div>

        <div className="work-item">
          <h3>Expert Flutter Developer (Part-Time Contract)</h3>
          <p className="work-company">
            <strong>Pingolearn</strong> - Pune, IN (Remote) | Feb 2022 – Aug
            2022
          </p>
          <p>
            Developed core features for an AI-powered language application
            serving 700,000+ users. Implemented subscription systems and
            AI-powered grammar detection engines using{" "}
            <span className="code">OpenAI</span> integration.
          </p>
        </div>
      </section>

      <section>
        <h2>education</h2>
        <div className="terminal-card">
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
        </div>
      </section>

      <section>
        <h2>achievements</h2>
        <div className="terminal-card">
          <ul>
            <li>
              Increased revenue by <span className="code">30%</span> through
              strategic A/B testing and subscription systems
            </li>
            <li>
              Reduced time-to-market by <span className="code">75%</span> with
              rapid prototyping frameworks
            </li>
            <li>
              Reduced new project setup time from{" "}
              <span className="code">4 days</span> to{" "}
              <span className="code">2 hours</span> with CLI automation
            </li>
            <li>
              Tripled user conversion rates through optimized paywall systems
            </li>
            <li>Reduced partner data migration time from weeks to hours</li>
          </ul>
        </div>
      </section>

      <section>
        <h2>interests</h2>
        <p>
          I'm passionate about full-stack development, serverless architectures,
          and building scalable systems that can handle millions of users. I
          enjoy working with emerging technologies like AI/ML integration,
          real-time data synchronization, and cross-platform development. I also
          believe in giving back to the community through mentoring, knowledge
          sharing, and contributing to the <span className="code">Flutter</span>
          , <span className="code">Node.js</span>, and{" "}
          <span className="code">React</span>
          ecosystems.
        </p>
      </section>
    </div>
  );
}
