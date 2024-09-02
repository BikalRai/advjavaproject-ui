import { Link } from "react-router-dom";
import "./footer.scss";
import {
  FaLinkedin,
  FaSquareFacebook,
  FaSquareInstagram,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className='container'>
      <div className='logo'>
        <p className='logo__text'>KickSpot</p>
        <p>©️ 2024 RaiCode</p>
        <p>All rights Reserved</p>
      </div>
      <div className='company'>
        <h5>Compnay</h5>
        <Link to='/about'>About Us</Link>
        <Link to='/about'>Contact </Link>
      </div>
      <div className='social'>
        <h5>Social</h5>
        <div className='social__links'>
          <Link>
            <FaSquareFacebook />
          </Link>
          <Link>
            <FaSquareInstagram />
          </Link>
          <Link>
            <FaLinkedin />
          </Link>
          <Link>
            <FaXTwitter />
          </Link>
        </div>
      </div>
      <div className='privacy'>
        <h5>Privacy & Terms</h5>
        <Link>Privacy Policy</Link>
        <Link>Terms of Service</Link>
        <Link>Cancellation Policy</Link>
      </div>
    </footer>
  );
};

export default Footer;
