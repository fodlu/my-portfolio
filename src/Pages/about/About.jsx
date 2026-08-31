import Goto from '../../components/goto/Goto';
import FAQ from '../../components/faq/FAQ';

import Tags from '../../components/Tags';
import ScoreBoard from '../../components/ScoreBoard';
import './about.css';
import { useNavigate } from 'react-router-dom';

function About() {
  const navigate = useNavigate();
  return (
    <div className="about">
      <section className="home">
        <div className="hero-detail">
          <Tags>About Me</Tags>
          <h1>
            Who is <span>Musediq Fadilulahi Opeyemi</span> ?
          </h1>
          <p>
            A full Stack Engineer with 4+ years of experience delivering production-grade web applications for startups
            and SMEs.
          </p>

          <p>
            I specialize in transforming business requirements into fast, secure, and user-friendly digital products
            using <strong>React, Next.js, Node.js, and PostgreSQL</strong>. My focus is on writing clean, maintainable
            code that drives real business results.
          </p>

          <p>Based in Nigeria. Open to Remote and on-site Opportunities</p>

          <ScoreBoard />
        </div>
        <div className="hero">
          <img src="/hero.jpg" alt="hero image" />
        </div>
      </section>

      <section className="about-services">
        <h2>What I Do</h2>
        <div className="services-grid">
          <div>
            <h3>Frontend Development</h3>
            <p>I build responsive, accessible, and performant user interfaces with React and Next.js.</p>
          </div>
          <div>
            <h3>Backend Development</h3>
            <p>I develop robust APIs with Node.js, Express, and Django. I work with PostgreSQL and MongoDB.</p>
          </div>
          <div>
            <h3>End-to-End Delivery</h3>
            <p>From idea to deployment, I handle the full product lifecycle using Git, Docker, and Vercel.</p>
          </div>
        </div>
      </section>

      <section className="about-approach">
        <h2>My Approach</h2>
        <p>I believe great softwares solves real problems. That is why i focused on 3 things:</p>
        <ul>
          <li>
            <strong>Business Impact:</strong> Every feature should move a metric - conversions, speed, or revenue
          </li>
          <li>
            <strong>Code Quality:</strong> Clean, documented, and testable code that teams can maintain
          </li>
          <li>
            <strong>Clear Communication:</strong> Regular updates and translating tech to business language
          </li>
        </ul>
      </section>

      <section className="about-approach">
        <p>During my career, I have</p>
        <ul>
          <li>
            I have built and deployed <strong>15+</strong> production web applications.
          </li>
          <li>
            Led frontend development for e-commerce platform serving <strong>1000+</strong> users.
          </li>
          <li>
            Collaborated with product designers and founders to launch MVPs in
            <strong> 4 - 6</strong> weeks.
          </li>
        </ul>
      </section>

      <section className="about-cta">
        <h2>Let’s Work Together</h2>
        <p>I’m currently open to full-time roles, contract work, and freelance projects.</p>
        <div className="buttons">
          <a href="public\FADILULAHI OPEYEMI Musediq CV new .pdf" download className="btn-primary">
            <Goto>Download CV</Goto>
          </a>
          <button className="btn-secondary" onClick={() => navigate('/contact')}>
            Get In Touch
          </button>
        </div>
      </section>

      <FAQ />
    </div>
  );
}

export default About;
