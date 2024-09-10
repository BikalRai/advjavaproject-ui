import Navbar from "../nav/Navbar";
import PropType from "prop-types";

import "./userlayout.scss";
import Footer from "../footer/Footer";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const UserAppLayout = ({ children }) => {
  const [stickyNav, setStickyNav] = useState(false);
  const location = useLocation();

  const handleScroll = () => {
    const scrollY = window.scrollY;

    if (scrollY > 50) {
      setStickyNav(true);
    } else {
      setStickyNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className='user__layout'>
      <div className={`nav ${stickyNav ? "stickyNav" : ""}`}>
        {location.pathname === "/login" || location.pathname === "/signup" ? (
          ""
        ) : (
          <Navbar />
        )}
      </div>
      <div className='content'>{children}</div>
      <div className='footer'>
        {location.pathname === "/login" || location.pathname === "/signup" ? (
          ""
        ) : (
          <Footer />
        )}
      </div>
    </div>
  );
};

UserAppLayout.propTypes = {
  children: PropType.element,
};

export default UserAppLayout;
