import { Outlet } from 'react-router-dom';
import Footer from './Footer';

function Layout() {
  return (
    <div className='app'>
      <header className='app-header'>
        <div className='logo-container'>
          <h1 className='brand-logo'>CodeCampus</h1>
          <p className='brand-tagline'>Ontdek, Leer, Excelleer</p>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default Layout;
