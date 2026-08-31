import React from 'react';
import { Link } from 'react-router-dom';
import './comp.css';

const Footer = () => {
  return (
    <footer>
      <p>&copy; 2026 Fadilulahi Opeyemi Musediq</p>

      <Link to="#" target="_blank">
        LinkedIn
      </Link>
      <Link to="#" target="_blank">
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
