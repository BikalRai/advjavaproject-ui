import { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdSpaceDashboard } from "react-icons/md";
import { RiCalendarScheduleFill } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import { FaHandshakeSimple, FaMapLocation } from "react-icons/fa6";
import "./verticalnav.scss";

const VerticalNav = () => {
  const [activeLink, setActiveLink] = useState("dashboard");

  const handleActiveLink = (linkName) => {
    setActiveLink(linkName);
  };

  return (
    <nav className='verticalNav'>
      <ul className='verticalNav__links'>
        <li
          className='verticalNav__links--link'
          onClick={() => handleActiveLink("dashboard")}
        >
          <NavLink
            to='/dashboard'
            className={activeLink === "dashboard" ? "active" : ""}
          >
            <MdSpaceDashboard className='icon' />
            <span>Dashboard</span>
          </NavLink>
        </li>
        <li
          className='verticalNav__links--link'
          onClick={() => handleActiveLink("bookings")}
        >
          <NavLink
            to='/bookings'
            className={activeLink === "bookings" ? "active" : ""}
          >
            <RiCalendarScheduleFill className='icon' />
            <span>Bookings</span>
          </NavLink>
        </li>
        <li
          className='verticalNav__links--link'
          onClick={() => handleActiveLink("users")}
        >
          <NavLink
            to='/users'
            className={activeLink === "users" ? "active" : ""}
          >
            <FaUsers className='icon' />
            <span>Users</span>
          </NavLink>
        </li>
        <li
          className='verticalNav__links--link'
          onClick={() => handleActiveLink("venues")}
        >
          <NavLink
            to='/venues'
            className={activeLink === "venues" ? "active" : ""}
          >
            <FaMapLocation className='icon' />
            <span>Venues</span>
          </NavLink>
        </li>
        <li
          className='verticalNav__links--link'
          onClick={() => handleActiveLink("services")}
        >
          <NavLink
            to='/services'
            className={activeLink === "services" ? "active" : ""}
          >
            <FaHandshakeSimple className='icon' />
            <span>Services</span>
          </NavLink>
        </li>
      </ul>
      <button className='btn__primary'>Logout</button>
    </nav>
  );
};

export default VerticalNav;
