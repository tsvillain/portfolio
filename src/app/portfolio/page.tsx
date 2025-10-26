export default function Portfolio() {
  return (
    <div>
      <h1>projects</h1>

      <section>
        <h2>featured projects</h2>

        <div className="project-item">
          <h3>Subscription & Gifting Paywall System</h3>
          <p>
            Engineered a comprehensive subscription and gifting paywall system
            that boosted revenue by <span className="code">30%</span> and tripled user conversion rates.
            Implemented strategic A/B testing and cross-platform compatibility
            for optimal user experience.
          </p>
          <p>
            <strong>Technologies:</strong> <span className="code">Next.js</span>, <span className="code">TypeScript</span>, <span className="code">Stripe API</span>,
            <span className="code">Node.js</span>
          </p>
          <p>
            <strong>Impact:</strong> Increased revenue by <span className="code">30%</span>, tripled user
            conversion rates
          </p>
        </div>

        <div className="project-item">
          <h3>Serverless Data Synchronization System</h3>
          <p>
            Architected a serverless, event-driven system on <span className="code">GCP</span> to synchronize
            payment, subscription, and user data across multiple third-party
            platforms in real-time. This system ensures data consistency across
            all integrated services.
          </p>
          <p>
            <strong>Technologies:</strong> <span className="code">Google Cloud Platform</span>, <span className="code">Serverless
            Functions</span>, <span className="code">Event-driven Architecture</span>, <span className="code">Real-time Sync</span>, <span className="code">Node.js</span>
          </p>
          <p>
            <strong>Impact:</strong> Real-time data synchronization across
            multiple platforms, improved system reliability
          </p>
        </div>

        <div className="project-item">
          <h3>CLI Tool for White-Label Configuration</h3>
          <p>
            Developed a command-line interface tool to automate white-label
            product configuration, reducing new project setup time from <span className="code">4 days</span>
            to <span className="code">2 hours</span> and increasing developer productivity by over <span className="code">95%</span>.
          </p>
          <p>
            <strong>Technologies:</strong> <span className="code">Node.js</span>, <span className="code">CLI Development</span>, <span className="code">Automation</span>,
            <span className="code">Configuration Management</span>
          </p>
          <p>
            <strong>Impact:</strong> Reduced setup time from <span className="code">4 days</span> to <span className="code">2 hours</span>,
            <span className="code">95%</span> productivity increase
          </p>
        </div>

        <div className="project-item">
          <h3>Wallbay - Wallpaper App</h3>
          <p>
            A <span className="code">Flutter</span>-based wallpaper application with <span className="code">114+</span> stars on GitHub,
            available on Google Play Store. Features high-quality wallpapers
            from <span className="code">Pexels API</span>, offline download capabilities, and modern UI with
            <span className="code">BLoC</span> state management.
          </p>
          <p>
            <strong>Technologies:</strong> <span className="code">Flutter</span>, <span className="code">Dart</span>, <span className="code">BLoC Pattern</span>, <span className="code">Pexels
            API</span>, <span className="code">Local Storage</span>, <span className="code">Wallpaper Manager</span>
          </p>
          <p>
            <strong>Features:</strong> Wallpaper browsing, download & set,
            offline access, modern UI/UX
          </p>
          <p>
            <a
              href="https://github.com/tsvillain/Wallbay"
              target="_blank"
              rel="noopener noreferrer"
              className="terminal-button"
            >
              view on github
            </a>
          </p>
        </div>
      </section>

      <section>
        <h2>client projects</h2>

        <div className="project-item">
          <h3>Offline-First Mobile Architecture</h3>
          <p>
            Led the transition to an offline-first mobile architecture, enabling
            full application functionality without an internet connection and
            improving user experience in low-connectivity environments.
          </p>
          <p>
            <strong>Technologies:</strong> <span className="code">Flutter</span>, <span className="code">Dart</span>, <span className="code">Riverpod</span>, <span className="code">Local
            Storage</span>, <span className="code">Offline Capabilities</span>
          </p>
          <p>
            <strong>Impact:</strong> Enhanced user experience in
            low-connectivity environments, full offline functionality
          </p>
        </div>

        <div className="project-item">
          <h3>Bulk Media Uploader System</h3>
          <p>
            Built a high-throughput bulk media uploader that reduced partner
            data migration time from weeks to hours. This tool facilitated
            seamless onboarding for large-scale enterprise clients and improved
            operational efficiency.
          </p>
          <p>
            <strong>Technologies:</strong> <span className="code">Node.js</span>, <span className="code">AWS S3</span>, <span className="code">Batch Processing</span>,
            <span className="code">High-throughput Systems</span>, <span className="code">Express.js</span>
          </p>
          <p>
            <strong>Impact:</strong> Reduced data migration time from weeks to
            hours, improved enterprise client onboarding
          </p>
        </div>
      </section>

      <section>
        <h2>personal projects</h2>

        <div className="project-item">
          <h3>MinifyURL - URL Shortener API</h3>
          <p>
            A fast and simple backend service that shortens long URLs into
            easy-to-share short links. Built with <span className="code">Node.js</span>, <span className="code">Express.js</span>, and
            <span className="code">TypeScript</span>, featuring <span className="code">MongoDB</span> integration and a custom hashing
            algorithm using <span className="code">farmhash</span> for generating unique short codes.
          </p>
          <p>
            <strong>Technologies:</strong> <span className="code">Node.js</span>, <span className="code">Express.js</span>, <span className="code">TypeScript</span>,
            <span className="code">MongoDB</span>, <span className="code">Mongoose</span>, <span className="code">REST API</span>
          </p>
          <p>
            <strong>Features:</strong> URL shortening, expiration dates, visit
            tracking, creator-based organization
          </p>
          <p>
            <a
              href="https://github.com/tsvillain/minifyurl"
              target="_blank"
              rel="noopener noreferrer"
              className="terminal-button"
            >
              view on github
            </a>
          </p>
        </div>

        <div className="project-item">
          <h3>Note Keeper - Note Taking App</h3>
          <p>
            A comprehensive note-taking application built with <span className="code">Flutter</span>,
            featuring local storage, search functionality, and a clean user
            interface for organizing personal notes and thoughts.
          </p>
          <p>
            <strong>Technologies:</strong> <span className="code">Flutter</span>, <span className="code">Dart</span>, <span className="code">Local Storage</span>, <span className="code">SQLite</span>,
            <span className="code">State Management</span>
          </p>
          <p>
            <strong>Features:</strong> Create, edit, delete notes, search
            functionality, local data persistence
          </p>
          <p>
            <a
              href="https://github.com/tsvillain/note_keeper"
              target="_blank"
              rel="noopener noreferrer"
              className="terminal-button"
            >
              view on github
            </a>
          </p>
        </div>

        <div className="project-item">
          <h3>24h Stories - Story Sharing App</h3>
          <p>
            A social media-style application for sharing 24-hour stories,
            similar to Instagram/Snapchat stories. Features real-time updates,
            user authentication, and ephemeral content sharing.
          </p>
          <p>
            <strong>Technologies:</strong> <span className="code">Flutter</span>, <span className="code">Firebase</span>, <span className="code">Real-time
            Database</span>, <span className="code">Authentication</span>, <span className="code">Cloud Storage</span>
          </p>
          <p>
            <strong>Features:</strong> Story creation, 24-hour expiration, user
            authentication, real-time updates
          </p>
          <p>
            <a
              href="https://github.com/tsvillain/24h-stories"
              target="_blank"
              rel="noopener noreferrer"
              className="terminal-button"
            >
              view on github
            </a>
          </p>
        </div>

        <div className="project-item">
          <h3>TMDB Movie App</h3>
          <p>
            A movie discovery application that integrates with The Movie
            Database (<span className="code">TMDB</span>) API to provide users with comprehensive movie
            information, ratings, reviews, and search functionality.
          </p>
          <p>
            <strong>Technologies:</strong> <span className="code">Flutter</span>, <span className="code">TMDB API</span>, <span className="code">HTTP Client</span>, <span className="code">JSON
            Parsing</span>, <span className="code">State Management</span>
          </p>
          <p>
            <strong>Features:</strong> Movie browsing, search, details, ratings,
            reviews, trending movies
          </p>
          <p>
            <a
              href="https://github.com/tsvillain/TMDB-movie-app"
              target="_blank"
              rel="noopener noreferrer"
              className="terminal-button"
            >
              view on github
            </a>
          </p>
        </div>
      </section>

      <section>
        <h2>skills demonstrated</h2>
        <div className="terminal-card">
          <ul>
            <li>
              <strong>Frontend Development:</strong> <span className="code">React</span>, <span className="code">Next.js</span>, <span className="code">Flutter</span>,
              Cross-platform Development, Offline Capabilities
            </li>
            <li>
              <strong>Backend Development:</strong> <span className="code">Node.js</span>, <span className="code">Express.js</span>,
              Serverless Architecture, API Development, CLI Tools
            </li>
            <li>
              <strong>Cloud & DevOps:</strong> <span className="code">AWS</span>, <span className="code">Google Cloud Platform</span>,
              <span className="code">Firebase</span>, Serverless Computing, <span className="code">Docker</span>, <span className="code">CI/CD</span>
            </li>
            <li>
              <strong>Databases & APIs:</strong> <span className="code">MongoDB</span>, <span className="code">Stripe API</span>, <span className="code">RevenueCat</span>,
              <span className="code">OpenAI API</span>, <span className="code">PostgreSQL</span>
            </li>
            <li>
              <strong>AI Integration:</strong> <span className="code">OpenAI API</span>, LLM Integration,
              Real-time Processing
            </li>
            <li>
              <strong>Architecture:</strong> Clean Architecture, Event-driven
              Systems, Microservices
            </li>
            <li>
              <strong>Tools:</strong> <span className="code">Git</span>, <span className="code">GitHub Actions</span>, <span className="code">CodeMagic</span>
            </li>
          </ul>
        </div>
      </section>

    </div>
  );
}
