import './index.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';

const Footer = () => {

  return (
    <footer className="footer">
      <div className="footer-top">

        <div className="connect-section">
          <h4>CONNECT</h4>

          <div className="social-links">
            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
              <GoogleIcon />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <TwitterIcon />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <InstagramIcon />
            </a>
          </div>

        </div>

        <div className="services-section">
          <h4>Services</h4>
          <h4>Towing</h4>
          <h4>Roadside Assistance</h4>
        </div>

      </div>

      <div className="footer-bottom">
        © 2023 Copyrights • Made with ♥ in WA
      </div>

    </footer>
  );
};

export default Footer;
