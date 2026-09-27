import { Link } from 'react-router-dom';
import './comp.css';

const Footer = () => {
  return (
    <footer>
      <p>&copy; 2026 Fadilulahi Opeyemi Musediq</p>

      <Link to="www.linkedin.com/in/fadilulahi-musediq-a8ab21326" target="_blank">
        LinkedIn
      </Link>
      <Link to="https://www.github.com/fodlu" target="_blank">
        GitHub
      </Link>
      <Link to="#" target="_blank">
        Twitter
      </Link>

      <a href="public\FADILULAHI OPEYEMI Musediq CV new .pdf" download className="btn-primary">
        Download CV
      </a>
    </footer>
  );
};

export default Footer;
