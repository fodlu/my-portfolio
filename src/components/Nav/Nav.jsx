import { NavLink } from 'react-router-dom';
import './nav.css';

export default function Nav() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      {/* <NavLink to="/services">Services</NavLink> */}
      <NavLink to="/projects">Projects</NavLink>
      {/* <NavLink to="/blogs">Blog</NavLink> */}
    </nav>
  );
}
