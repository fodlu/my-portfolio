import Footer from './components/Footer';
import Header from './components/Header/Header';
import { Outlet } from 'react-router-dom';

export default function AppLayout() {
  return (
    <div className="container">
      <Header />
      <main>
        <Outlet />
        <Footer />
      </main>
    </div>
  );
}
