import { useNavigate } from 'react-router-dom';
import Nav from '../Nav/Nav';
import './header.css';

export default function Header() {
  const navigate = useNavigate();
  return (
    <header>
      <p className="logo" onClick={() => navigate('/')}>
        F
      </p>
      <Nav />
      <button onClick={() => navigate('/contact')}>Contact Me</button>
    </header>
  );
}
