export default function WorkExperience() {
  return (
    <div>
      <h1>WORK EXPERIENCE</h1>

      <section>
        <div className="work-item">
          <h2 className="work-title">Senior Software Engineer</h2>
          <p className="work-company">
            <a href="https://breakthroughapps.io/">BREAKTHROUGH</a> - New York,
            NY (Remote)
          </p>
          <p className="work-duration">July 2023 – Present</p>
          <p>
            Leading development of high-impact, full-stack applications for
            mobile and web platforms. Specializing in Flutter mobile
            development, Node.js backend systems, and serverless architectures
            on GCP. Driving business outcomes through technical innovation and
            strategic implementation across the entire technology stack.
          </p>
          <ul>
            <li>
              Engineered a subscription and gifting paywall, boosting revenue by
              30% and tripling user conversion rates through strategic feature
              implementation and A/B testing
            </li>
            <li>
              Architected a serverless, event-driven system on GCP to
              synchronize payment, subscription, and user data across multiple
              third-party platforms in real-time
            </li>
            <li>
              Developed a CLI tool to automate white-label product
              configuration, reducing new project setup time from 4 days to 2
              hours and increasing developer productivity by over 95%
            </li>
            <li>
              Led the transition to an offline-first mobile architecture,
              enabling full application functionality without an internet
              connection and improving user experience in low-connectivity
              environments
            </li>
            <li>
              Built a high-throughput bulk media uploader that reduced partner
              data migration time from weeks to hours, facilitating seamless
              onboarding for large-scale enterprise clients
            </li>
          </ul>
        </div>

        <div className="work-item">
          <h2 className="work-title">Senior Flutter Developer</h2>
          <p className="work-company">
            <a href="https://pixelapps.io/">PixelApps</a> - Ahmedabad, IN
            (Hybrid)
          </p>
          <p className="work-duration">May 2021 – July 2023</p>
          <p>
            Led mobile development initiatives and established engineering best
            practices. Co-designed Clean Architecture standards and mentored
            junior developers while delivering high-quality Flutter applications
            and rapid prototyping solutions.
          </p>
          <ul>
            <li>
              Co-designed and implemented a new Clean Architecture standard
              using Flutter and Riverpod, resulting in a 60% reduction in
              production bug reports and enhancing long-term maintainability
            </li>
            <li>
              Owned the development of the initial MVP and core API for
              WellTested.ai, a flagship product that successfully pivoted the
              company towards a product-based business model
            </li>
            <li>
              Established a rapid prototyping framework that accelerated the
              development lifecycle for new features by 75%, reducing average
              time-to-market from 4 weeks to 1 week
            </li>
            <li>
              Mentored junior developers on best practices for mobile
              development, code quality, and state management, improving overall
              team velocity and engineering standards
            </li>
          </ul>
        </div>

        <div className="work-item">
          <h2 className="work-title">
            Expert Flutter Developer (Part-Time Contract)
          </h2>
          <p className="work-company">
            <a href="https://www.lingopanda.app/">Pingolearn</a> - Pune, IN
            (Remote)
          </p>
          <p className="work-duration">Feb 2022 – Aug 2022</p>
          <p>
            Developed core features for an AI-powered language application
            serving over 700,000 users. Implemented subscription systems and
            AI-powered grammar detection engines using modern Flutter
            development practices and OpenAI integration.
          </p>
          <ul>
            <li>
              Developed and launched the core in-app subscription module for an
              AI-powered language application serving over 700,000 users,
              integrating RevenueCat for cross-platform payment processing
            </li>
            <li>
              Implemented the primary grammar detection engine from the ground
              up, leveraging OpenAI's LLM to provide real-time, accurate speech
              analysis and feedback to users
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2>KEY TECHNICAL ACHIEVEMENTS</h2>
        <div className="work-item">
          <h3 className="work-title">Revenue & Business Impact</h3>
          <ul>
            <li>
              Increased revenue by 30% through strategic A/B testing and
              optimized subscription systems
            </li>
            <li>
              Tripled user conversion rates through web-based paywall
              implementation
            </li>
            <li>
              Reduced partner onboarding time from weeks to hours with bulk
              media uploader
            </li>
          </ul>
        </div>

        <div className="work-item">
          <h3 className="work-title">Development Efficiency</h3>
          <ul>
            <li>
              Reduced time-to-market by 75% with rapid prototyping frameworks
            </li>
            <li>
              Reduced new project setup time from 4 days to 2 hours with CLI
              automation
            </li>
          </ul>
        </div>

        <div className="work-item">
          <h3 className="work-title">Technical Architecture</h3>
          <ul>
            <li>
              Architected serverless, event-driven systems on GCP for real-time
              data synchronization
            </li>
            <li>
              Built offline-capable mobile applications with seamless media
              access
            </li>
            <li>
              Implemented AI-powered grammar detection using OpenAI LLM
              integration
            </li>
            <li>
              Developed cross-platform subscription systems with RevenueCat
              integration
            </li>
            <li>
              Created CLI tools for automated white-label product configuration
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
