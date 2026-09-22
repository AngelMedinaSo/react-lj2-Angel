import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='app-footer'>
      <div className='footer-top'>
        <div className='footer-brand'>
          <h3 className='footer-logo'>CodeCampus</h3>
          <p className='footer-tagline'>
            Online cursussen voor de ontwikkelaar van morgen.
          </p>
        </div>

        <div className='footer-columns'>
          <div className='footer-col'>
            <h4>Leren</h4>
            <ul>
              <li>
                <a href='#'>Alle cursussen</a>
              </li>
              <li>
                <a href='#'>Leerpaden</a>
              </li>
              <li>
                <a href='#'>Docenten</a>
              </li>
            </ul>
          </div>
          <div className='footer-col'>
            <h4>Bedrijf</h4>
            <ul>
              <li>
                <a href='#'>Over ons</a>
              </li>
              <li>
                <a href='#'>Blog</a>
              </li>
              <li>
                <a href='#'>Contact</a>
              </li>
            </ul>
          </div>
          <div className='footer-col'>
            <h4>Support</h4>
            <ul>
              <li>
                <a href='#'>Helpcentrum</a>
              </li>
              <li>
                <a href='#'>Voorwaarden</a>
              </li>
              <li>
                <a href='#'>Privacy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className='footer-bottom'>
        <p>&copy; {currentYear} CodeCampus. Alle rechten voorbehouden.</p>
        <p className='footer-meta'>Gemaakt in Nederland</p>
      </div>
    </footer>
  );
};

export default Footer;
