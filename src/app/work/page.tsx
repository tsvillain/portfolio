export default function WorkExperience() {
  return (
    <div>
      <h1>work experience</h1>

      <section>
        <div className="work-item">
          <h3>Senior Software Engineer</h3>
          <p className="work-company">
            <a href="https://breakthroughapps.io/">Breakthrough</a> - New York, NY (Remote)
          </p>
          <p className="work-duration">July 2023 – Present</p>
          <p>
            Leading development of high-impact, full-stack applications for
            mobile and web platforms. Specializing in <span className="code">Flutter</span> mobile
            development, <span className="code">Node.js</span> backend systems, and serverless architectures
            on <span className="code">GCP</span>. Driving business outcomes through technical innovation and
            strategic implementation across the entire technology stack.
          </p>
          <ul>
            <li>
              Engineered a subscription and gifting paywall, boosting revenue by
              <span className="code">30%</span> and tripling user conversion rates through strategic feature
              implementation and A/B testing
            </li>
            <li>
              Architected a serverless, event-driven system on <span className="code">GCP</span> to
              synchronize payment, subscription, and user data across multiple
              third-party platforms in real-time
            </li>
            <li>
              Developed a <span className="code">CLI</span> tool to automate white-label product
              configuration, reducing new project setup time from <span className="code">4 days</span> to <span className="code">2
              hours</span> and increasing developer productivity by over <span className="code">95%</span>
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
            <li>
              Architected and developed a production-ready Stripe payment backend API for multi-tenant SaaS, handling subscriptions, one-time payments, coupons, analytics, and financial operations. Implemented serverless webhook processing via <span className="code">AWS Lambda</span> and <span className="code">SQS FIFO</span>, MRR tracking, and multi-tenant support with Stripe Connect. The system includes comprehensive analytics, dispute management, and production-ready deployment with <span className="code">Docker</span>, error handling, and monitoring
            </li>
          </ul>
        </div>

        <div className="work-item">
          <h3>Senior Flutter Developer</h3>
          <p className="work-company">
            <a href="https://pixelapps.io/">PixelApps</a> - Ahmedabad, IN (Hybrid)
          </p>
          <p className="work-duration">May 2021 – July 2023</p>
          <p>
            Led mobile development initiatives and established engineering best
            practices. Co-designed Clean Architecture standards and mentored
            junior developers while delivering high-quality <span className="code">Flutter</span> applications
            and rapid prototyping solutions.
          </p>
          <ul>
            <li>
              Co-designed and implemented a new Clean Architecture standard
              using <span className="code">Flutter</span> and <span className="code">Riverpod</span>, resulting in a <span className="code">60%</span> reduction in
              production bug reports and enhancing long-term maintainability
            </li>
            <li>
              Owned the development of the initial MVP and core API for
              WellTested.ai, a flagship product that successfully pivoted the
              company towards a product-based business model
            </li>
            <li>
              Established a rapid prototyping framework that accelerated the
              development lifecycle for new features by <span className="code">75%</span>, reducing average
              time-to-market from <span className="code">4 weeks</span> to <span className="code">1 week</span>
            </li>
            <li>
              Mentored junior developers on best practices for mobile
              development, code quality, and state management, improving overall
              team velocity and engineering standards
            </li>
          </ul>
        </div>

        <div className="work-item">
          <h3>Expert Flutter Developer (Part-Time Contract)</h3>
          <p className="work-company">
            <a href="https://www.lingopanda.app/">Pingolearn</a> - Pune, IN (Remote)
          </p>
          <p className="work-duration">Feb 2022 – Aug 2022</p>
          <p>
            Developed core features for an AI-powered language application
            serving over <span className="code">700,000</span> users. Implemented subscription systems and
            AI-powered grammar detection engines using modern <span className="code">Flutter</span>
            development practices and <span className="code">OpenAI</span> integration.
          </p>
          <ul>
            <li>
              Developed and launched the core in-app subscription module for an
              AI-powered language application serving over <span className="code">700,000</span> users,
              integrating <span className="code">RevenueCat</span> for cross-platform payment processing
            </li>
            <li>
              Implemented the primary grammar detection engine from the ground
              up, leveraging <span className="code">OpenAI's LLM</span> to provide real-time, accurate speech
              analysis and feedback to users
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2>key achievements</h2>
        <div className="terminal-card">
          <h3>Revenue & Business Impact</h3>
          <ul>
            <li>
              Increased revenue by <span className="code">30%</span> through strategic A/B testing and
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

        <div className="terminal-card">
          <h3>Development Efficiency</h3>
          <ul>
            <li>
              Reduced time-to-market by <span className="code">75%</span> with rapid prototyping frameworks
            </li>
            <li>
              Reduced new project setup time from <span className="code">4 days</span> to <span className="code">2 hours</span> with CLI
              automation
            </li>
          </ul>
        </div>

        <div className="terminal-card">
          <h3>Technical Architecture</h3>
          <ul>
            <li>
              Architected serverless, event-driven systems on <span className="code">GCP</span> for real-time
              data synchronization
            </li>
            <li>
              Built offline-capable mobile applications with seamless media
              access
            </li>
            <li>
              Implemented AI-powered grammar detection using <span className="code">OpenAI LLM</span>
              integration
            </li>
            <li>
              Developed cross-platform subscription systems with <span className="code">RevenueCat</span>
              integration
            </li>
            <li>
              Created <span className="code">CLI</span> tools for automated white-label product configuration
            </li>
            <li>
              Built production-ready Stripe payment backend API with multi-tenant SaaS support, serverless webhook processing, MRR tracking, and comprehensive analytics
            </li>
          </ul>
        </div>
      </section>

    </div>
  );
}
