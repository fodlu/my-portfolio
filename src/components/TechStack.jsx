const TechStack = () => {
  return (
    <section className="tech-section">
      <h2>Technologies I Work With</h2>
      <p>I use modern, industry-standard tools to build scalable and maintainable web applications.</p>

      <div className="tech-grid">
        <div className="tech-category">
          <h3>Frontend</h3>
          <div className="tech-tags">
            <span>React</span>
            <span>Next.js</span>
            <span>TypeScript</span>
            <span>Tailwind CSS</span>
            <span>Redux</span>
          </div>
        </div>

        <div className="tech-category">
          <h3>Backend</h3>
          <div className="tech-tags">
            <span>Node.js</span>
            <span>Express</span>
            <span>Python</span>
            <span>Django</span>
            <span>REST APIs</span>
          </div>
        </div>

        <div className="tech-category">
          <h3>Database & Cloud</h3>
          <div className="tech-tags">
            <span>PostgreSQL</span>
            <span>MongoDB</span>
            <span>Prisma</span>
            <span>Docker</span>
            <span>Vercel</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
