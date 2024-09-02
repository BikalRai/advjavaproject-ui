import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import PrimaryButton from "../button/PrimaryButton";
import SecondaryButton from "../button/SecondaryButton";
import "./navbar.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [stickyNav, setStickyNav] = useState(false);
  const [visible, setVisible] = useState(false);

  const handleActiveLink = (linkName) => {
    setActiveLink(linkName);
  };

  const handleScroll = () => {
    const scrollY = window.scrollY;

    if (scrollY > 50) {
      setStickyNav(true);
    } else {
      setStickyNav(false);
    }
  };

  const handleVisiblity = () => {
    setVisible((prev) => !prev);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(visible);

  return (
    <>
      <nav className={`navbar ${stickyNav ? "stickyNav" : ""}`}>
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

          <li className='navbar__nav--links-link'>
            <NavLink
              to='/matches'
              className={activeLink === "matches" ? "active" : ""}
              onClick={() => handleActiveLink("matches")}
            >
              Matches
            </NavLink>
          </li>

          <li className='navbar__nav--links-link'>
            <NavLink
              to='/mybookings'
              className={activeLink === "mybookings" ? "active" : ""}
              onClick={() => handleActiveLink("mybookings")}
            >
              My Bookings
            </NavLink>
          </li>
          <div className='navbar__btns'>
            <PrimaryButton btnText='Sign In' />
            <SecondaryButton btnText='Sign Up' />
          </div>
        </ul>

        <div className='hamburger'>
          <GiHamburgerMenu className='lines' onClick={handleVisiblity} />
        </div>
      </nav>
      <main></main>
    </>
  );
};

export default Navbar;
