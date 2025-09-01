export default function Contact() {
  return (
    <div>
      <h1>CONTACT</h1>

      <section>
        <h2>GET IN TOUCH</h2>
        <p>
          I'm always interested in hearing about new opportunities, interesting
          projects, or just connecting with fellow developers. Feel free to
          reach out!
        </p>
      </section>

      <section>
        <h2>PRIMARY CONTACT</h2>
        <div className="contact-info">
          <p>
            <strong>Email:</strong>
            <a href="mailto:tekeshwarsingh2000@gmail.com">
              tekeshwarsingh2000@gmail.com
            </a>
          </p>
          <p>
            <strong>LinkedIn:</strong>
            <a
              href="https://linkedin.com/in/tsvillain"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/tsvillain
            </a>
          </p>
          <p>
            <strong>GitHub:</strong>
            <a
              href="https://github.com/tsvillain"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/tsvillain
            </a>
          </p>
          <p>
            <strong>X:</strong>
            <a
              href="https://x.com/tsvillain"
              target="_blank"
              rel="noopener noreferrer"
            >
              x.com/tsvillain
            </a>
          </p>
        </div>
      </section>

      <section>
        <h2>AVAILABILITY</h2>
        <p>
          I'm currently open to new opportunities and freelance projects. I'm
          particularly interested in:
        </p>
        <div className="retro-card">
          <ul>
            <li>Senior Software Engineer roles</li>
            <li>Full-stack development projects (React/Next.js + Node.js)</li>
            <li>Flutter mobile app development</li>
            <li>Serverless and cloud architecture consulting</li>
            <li>Technical mentoring and code review</li>
            <li>Open source contributions</li>
          </ul>
        </div>
      </section>

      <section>
        <h2>RESPONSE TIME</h2>
        <p>
          I typically respond to emails within 24 hours during weekdays. For
          urgent matters, please include "URGENT" in the subject line.
        </p>
      </section>

      <section>
        <h2>LOCATION & TIMEZONE</h2>
        <div className="retro-card">
          <p>
            <strong>Location:</strong> Remote (Based in India)
            <br />
            <strong>Timezone:</strong> IST (UTC+5:30)
            <br />
            <strong>Available for:</strong> Remote work, global collaborations,
            international projects
          </p>
        </div>
      </section>

      <section>
        <h2>PREFERRED COMMUNICATION</h2>
        <div className="retro-card">
          <ul>
            <li>
              <strong>Initial Contact:</strong> Email
              (tekeshwarsingh2000@gmail.com)
            </li>
            <li>
              <strong>Technical Discussions:</strong> Email or GitHub Issues
            </li>
            <li>
              <strong>Project Planning:</strong> Video calls (Zoom, Google Meet)
            </li>
            <li>
              <strong>Quick Questions:</strong> LinkedIn messages
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2>WHAT TO INCLUDE IN YOUR MESSAGE</h2>
        <p>To help me respond more effectively, please include:</p>
        <div className="retro-card">
          <ul>
            <li>Brief description of the opportunity or project</li>
            <li>Timeline and scope</li>
            <li>
              Technologies involved (especially React/Next.js, Node.js, Flutter,
              cloud platforms)
            </li>
            <li>Compensation or budget (if applicable)</li>
            <li>How you found me or why you're reaching out</li>
          </ul>
        </div>
      </section>

      <section>
        <h2>CONNECTING</h2>
        <p>
          I'm also active in the developer community and would love to connect
          with you on:
        </p>
        <div className="retro-card">
          <ul>
            <li>
              <a
                href="https://github.com/tsvillain"
                target="_blank"
                rel="noopener noreferrer"
                className="retro-button"
              >
                GitHub (@tsvillain)
              </a>{" "}
              - For open source contributions and technical projects
            </li>
            <li>
              <a
                href="https://linkedin.com/in/tsvillain"
                target="_blank"
                rel="noopener noreferrer"
                className="retro-button"
              >
                LinkedIn (@tsvillain)
              </a>{" "}
              - For professional networking and opportunities
            </li>
            <li>
              <a
                href="https://x.com/tsvillain"
                target="_blank"
                rel="noopener noreferrer"
                className="retro-button"
              >
                X (@tsvillain)
              </a>{" "}
              - For tech discussions and industry news
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2>EXPERTISE AREAS</h2>
        <p>
          I specialize in the following areas and would be happy to discuss
          opportunities related to:
        </p>
        <div className="retro-card">
          <ul>
            <li>
              <strong>Frontend Development:</strong> React, Next.js, TypeScript,
              responsive design
            </li>
            <li>
              <strong>Mobile Development:</strong> Flutter, cross-platform apps,
              offline capabilities
            </li>
            <li>
              <strong>Backend Development:</strong> Node.js, Express.js,
              serverless architectures
            </li>
            <li>
              <strong>Cloud & DevOps:</strong> AWS, GCP, Firebase, serverless
              computing, Docker
            </li>
            <li>
              <strong>Databases & APIs:</strong> MongoDB, PostgreSQL, Stripe
              integration, OpenAI API
            </li>
            <li>
              <strong>AI Integration:</strong> OpenAI API, LLM integration,
              AI-powered features
            </li>
            <li>
              <strong>Architecture:</strong> Clean Architecture, microservices,
              event-driven systems
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2>THANK YOU</h2>
        <p>
          Thank you for taking the time to visit my portfolio and consider
          reaching out. I look forward to hearing from you and potentially
          collaborating on exciting projects that push the boundaries of
          full-stack development!
        </p>
      </section>

      <section className="contact-info">
        <h2>READY TO START?</h2>
        <p>Let's build something amazing together!</p>
        <a href="mailto:tekeshwarsingh2000@gmail.com" className="retro-button">SEND EMAIL</a>
      </section>
    </div>
  );
}
