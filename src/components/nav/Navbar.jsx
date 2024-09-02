import { NavLink } from 'react-router-dom';
import PrimaryButton from '../button/PrimaryButton';
import SecondaryButton from '../button/SecondaryButton';
import './navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        {/* <img src="" alt="" /> */}
        <p className="logo">KickSpot</p>
      </div>
      <ul className="navbar__nav--links">
        <li className="navbar__nav--links-link">
          <NavLink>Home</NavLink>
        </li>
        <li className="navbar__nav--links-link">
          <NavLink>About</NavLink>
        </li>
        <PrimaryButton btnText="Sign In" />
        <SecondaryButton btnText="Sign Up" />
      </ul>
    </nav>
  );
};

export default Navbar;
