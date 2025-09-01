export default function Portfolio() {
  return (
    <div>
      <h1>PORTFOLIO</h1>

      <section>
        <h2>FEATURED PROJECTS</h2>

        <div className="project-item">
          <h3 className="project-title">
            Subscription & Gifting Paywall System
          </h3>
          <p>
            Engineered a comprehensive subscription and gifting paywall system
            that boosted revenue by 30% and tripled user conversion rates.
            Implemented strategic A/B testing and cross-platform compatibility
            for optimal user experience.
          </p>
          <p>
            <strong>Technologies:</strong> Next.js, TypeScript, Stripe API,
            Node.js
          </p>
          <p>
            <strong>Impact:</strong> Increased revenue by 30%, tripled user
            conversion rates
          </p>
        </div>

        <div className="project-item">
          <h3 className="project-title">
            Serverless Data Synchronization System
          </h3>
          <p>
            Architected a serverless, event-driven system on GCP to synchronize
            payment, subscription, and user data across multiple third-party
            platforms in real-time. This system ensures data consistency across
            all integrated services.
          </p>
          <p>
            <strong>Technologies:</strong> Google Cloud Platform, Serverless
            Functions, Event-driven Architecture, Real-time Sync, Node.js
          </p>
          <p>
            <strong>Impact:</strong> Real-time data synchronization across
            multiple platforms, improved system reliability
          </p>
        </div>

        <div className="project-item">
          <h3 className="project-title">
            CLI Tool for White-Label Configuration
          </h3>
          <p>
            Developed a command-line interface tool to automate white-label
            product configuration, reducing new project setup time from 4 days
            to 2 hours and increasing developer productivity by over 95%.
          </p>
          <p>
            <strong>Technologies:</strong> Node.js, CLI Development, Automation,
            Configuration Management
          </p>
          <p>
            <strong>Impact:</strong> Reduced setup time from 4 days to 2 hours,
            95% productivity increase
          </p>
        </div>

        <div className="project-item">
          <h3 className="project-title">Wallbay - Wallpaper App</h3>
          <p>
            A Flutter-based wallpaper application with 114+ stars on GitHub,
            available on Google Play Store. Features high-quality wallpapers
            from Pexels API, offline download capabilities, and modern UI with
            BLoC state management.
          </p>
          <p>
            <strong>Technologies:</strong> Flutter, Dart, BLoC Pattern, Pexels
            API, Local Storage, Wallpaper Manager
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
              className="retro-button"
            >
              View on GitHub
            </a>
          </p>
        </div>
      </section>

      <section>
        <h2>CLIENT PROJECTS</h2>

        <div className="project-item">
          <h3 className="project-title">Offline-First Mobile Architecture</h3>
          <p>
            Led the transition to an offline-first mobile architecture, enabling
            full application functionality without an internet connection and
            improving user experience in low-connectivity environments.
          </p>
          <p>
            <strong>Technologies:</strong> Flutter, Dart, Riverpod, Local
            Storage, Offline Capabilities
          </p>
          <p>
            <strong>Impact:</strong> Enhanced user experience in
            low-connectivity environments, full offline functionality
          </p>
        </div>

        <div className="project-item">
          <h3 className="project-title">Bulk Media Uploader System</h3>
          <p>
            Built a high-throughput bulk media uploader that reduced partner
            data migration time from weeks to hours. This tool facilitated
            seamless onboarding for large-scale enterprise clients and improved
            operational efficiency.
          </p>
          <p>
            <strong>Technologies:</strong> Node.js, AWS S3, Batch Processing,
            High-throughput Systems, Express.js
          </p>
          <p>
            <strong>Impact:</strong> Reduced data migration time from weeks to
            hours, improved enterprise client onboarding
          </p>
        </div>
      </section>

      <section>
        <h2>PERSONAL PROJECTS</h2>

        <div className="project-item">
          <h3 className="project-title">MinifyURL - URL Shortener API</h3>
          <p>
            A fast and simple backend service that shortens long URLs into
            easy-to-share short links. Built with Node.js, Express.js, and
            TypeScript, featuring MongoDB integration and a custom hashing
            algorithm using farmhash for generating unique short codes.
          </p>
          <p>
            <strong>Technologies:</strong> Node.js, Express.js, TypeScript,
            MongoDB, Mongoose, REST API
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
              className="retro-button"
            >
              View on GitHub
            </a>
          </p>
        </div>

        <div className="project-item">
          <h3 className="project-title">Note Keeper - Note Taking App</h3>
          <p>
            A comprehensive note-taking application built with Flutter,
            featuring local storage, search functionality, and a clean user
            interface for organizing personal notes and thoughts.
          </p>
          <p>
            <strong>Technologies:</strong> Flutter, Dart, Local Storage, SQLite,
            State Management
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
              className="retro-button"
            >
              View on GitHub
            </a>
          </p>
        </div>

        <div className="project-item">
          <h3 className="project-title">24h Stories - Story Sharing App</h3>
          <p>
            A social media-style application for sharing 24-hour stories,
            similar to Instagram/Snapchat stories. Features real-time updates,
            user authentication, and ephemeral content sharing.
          </p>
          <p>
            <strong>Technologies:</strong> Flutter, Firebase, Real-time
            Database, Authentication, Cloud Storage
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
              className="retro-button"
            >
              View on GitHub
            </a>
          </p>
        </div>

        <div className="project-item">
          <h3 className="project-title">TMDB Movie App</h3>
          <p>
            A movie discovery application that integrates with The Movie
            Database (TMDB) API to provide users with comprehensive movie
            information, ratings, reviews, and search functionality.
          </p>
          <p>
            <strong>Technologies:</strong> Flutter, TMDB API, HTTP Client, JSON
            Parsing, State Management
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
              className="retro-button"
            >
              View on GitHub
            </a>
          </p>
        </div>
      </section>

      <section>
        <h2>SKILLS DEMONSTRATED</h2>
        <div className="retro-card">
          <ul>
            <li>
              <strong>Frontend Development:</strong> React, Next.js, Flutter,
              Cross-platform Development, Offline Capabilities
            </li>
            <li>
              <strong>Backend Development:</strong> Node.js, Express.js,
              Serverless Architecture, API Development, CLI Tools
            </li>
            <li>
              <strong>Cloud & DevOps:</strong> AWS, Google Cloud Platform,
              Firebase, Serverless Computing, Docker, CI/CD
            </li>
            <li>
              <strong>Databases & APIs:</strong> MongoDB, Stripe API, RevenueCat,
              OpenAI API, PostgreSQL
            </li>
            <li>
              <strong>AI Integration:</strong> OpenAI API, LLM Integration,
              Real-time Processing
            </li>
            <li>
              <strong>Architecture:</strong> Clean Architecture, Event-driven
              Systems, Microservices
            </li>
            <li>
              <strong>Tools:</strong> Git, GitHub Actions, CodeMagic
            </li>
          </ul>
        </div>
      </section>

      <section className="contact-info">
        <h2>LIKE WHAT YOU SEE?</h2>
        <p>Let's discuss your next project and bring your ideas to life!</p>
        <a href="/contact" className="retro-button">START A PROJECT</a>
      </section>
    </div>
  );
}
