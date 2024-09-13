import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import PrimaryButton from "../button/PrimaryButton";
import SecondaryButton from "../button/SecondaryButton";
import "./navbar.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { AuthContext } from "../../utils/AuthProvider";
import MenuShow from "../useravatar/MenuShow";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [visible, setVisible] = useState(false);

  const { loggedInStatus } = useContext(AuthContext);

  const handleActiveLink = (linkName) => {
    setActiveLink(linkName);
  };

  const handleVisiblity = () => {
    setVisible((prev) => !prev);
  };

  return (
    <>
      <nav className={`navbar `}>
        <div className='navbar__logo'>
          {/* <img src="" alt="" /> */}
          <p className='logo'>KickSpot</p>
        </div>
        <ul className={`navbar__nav--links ${visible ? "on" : ""}`}>
          <IoClose className='closeIcon' onClick={handleVisiblity} />

          <li className='navbar__nav--links-link'>
            <NavLink
              to='/'
              className={activeLink === "home" ? "active" : ""}
              onClick={() => handleActiveLink("home")}
            >
              Home
            </NavLink>
          </li>
          <li className='navbar__nav--links-link'>
            <NavLink
              to='/about'
              className={activeLink === "about" ? "active" : ""}
              onClick={() => handleActiveLink("about")}
            >
              About
            </NavLink>
          </li>

          <li className='navbar__nav--links-link'>
            <NavLink
              to='/venues'
              className={activeLink === "venues" ? "active" : ""}
              onClick={() => handleActiveLink("venues")}
            >
              Venues
            </NavLink>
          </li>

          {/* <li className='navbar__nav--links-link'>
            <NavLink
              to='/matches'
              className={activeLink === "matches" ? "active" : ""}
              onClick={() => handleActiveLink("matches")}
            >
              Matches
            </NavLink>
          </li> */}

          <li className='navbar__nav--links-link'>
            <NavLink
              to='/mybookings'
              className={activeLink === "mybookings" ? "active" : ""}
              onClick={() => handleActiveLink("mybookings")}
            >
              My Bookings
            </NavLink>
          </li>
          {loggedInStatus ? (
            <div className='navbar__avatar'>
              {/* <UserAvatar
                name={`${user.firstName} ${user.lastName}`}
                img={user.image}
              /> */}
              <MenuShow />
            </div>
          ) : (
            <div className='navbar__btns'>
              <Link to='/login'>
                <PrimaryButton btnText='Sign In' />
              </Link>
              <Link to='/signup'>
                <SecondaryButton btnText='Sign Up' />
              </Link>
            </div>
          )}
        </ul>

        <div className='hamburger'>
          <GiHamburgerMenu className='lines' onClick={handleVisiblity} />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
