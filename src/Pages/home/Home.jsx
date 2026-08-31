import { useNavigate, Link } from 'react-router-dom';
import Goto from '../../components/goto/Goto';
import '../../index.css';
import './home.css';
import TechStack from '../../components/TechStack';
import { ArrowRight, Download, File, LucidePhone, PaperBag, Phone, PhoneCall } from 'lucide-react';

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div className="home">
        <section className="hero-detail">
          <h2>Musediq Fadilulahi Opeyemi</h2>
          <h3>
            Full Stack Web Engineer | <span>React ● Node.js ● Typescript ● Tailwind CSS ● Express</span>
          </h3>
          <p>
            I build scalable web applications that solve real business problems. With 4+ years shipping products for
            startups and company across Nigeria, I specialize in turning ideas into fast, secure, and user-focused
            platforms
          </p>
          <div className="hire">
            <Goto onClick={() => navigate('/projects')}>View Projects</Goto>

            <button onClick={() => navigate('/about')}>Get In Touch</button>
          </div>
        </section>

        <section className="hero">
          <img src="/images/Hero-main.jpg" alt="hero image" />
        </section>
      </div>

      <TechStack />

      <section className="about-snippet">
        <div>
          <h2>About Me</h2>
          <p>
            I'm a Full Stack Web Engineer based in Lagos with 4+ years experience building scalable web applicationa. I
            focus on writing clean code that solves real business problems.
          </p>
          <Link to="/about">
            Read More About Me <ArrowRight />
          </Link>
        </div>
        {/* <img src="/images/hero-about.jpg" alt="hero image" /> */}
      </section>

      <section className="final">
        <h2>Let's Build Something Great Together</h2>
        <p>I'm currently open to full-time roles and contract opportunities.</p>
        <div>
          <button>
            <Link to="/contact">
              Get In Touch <LucidePhone />
            </Link>
          </button>
          <button>
            <a href="public\FADILULAHI OPEYEMI Musediq CV new .pdf" download target="_blank" className="btn-primary">
              Download CV
              <span>
                <Download />
              </span>
            </a>
          </button>
        </div>
      </section>
    </>
  );
}
