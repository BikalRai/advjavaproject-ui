import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { MdSpaceDashboard } from "react-icons/md";
import { RiCalendarScheduleFill } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import { FaHandshakeSimple, FaMapLocation } from "react-icons/fa6";
import "./verticalnav.scss";
import { IoLogOut } from "react-icons/io5";
import { AuthContext } from "../../utils/AuthProvider";

const VerticalNav = () => {
  const [activeLink, setActiveLink] = useState("dashboard");

  // const { logout } = useContext(AuthContext);
  // const navigate = useNavigate();

  const handleActiveLink = (linkName) => {
    setActiveLink(linkName);
  };

  // const handleLogout = () => {
  //   logout();
  //   navigate("/");
  // };

  return (
    <nav className='verticalNav'>
      <ul className='verticalNav__links'>
        <li
          className='verticalNav__links--link'
          onClick={() => handleActiveLink("dashboard")}
        >
          <NavLink
            to='/'
            className={activeLink === "dashboard" ? "active" : ""}
            title='dashboard'
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
            title='bookings'
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
            title='users'
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
            title='venues'
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
            title='services'
          >
            <FaHandshakeSimple className='icon' />
            <span>Services</span>
          </NavLink>
        </li>
      </ul>
      {/* <button type='button' onClick={handleLogout} className='btn__primary'>
        Logout
      </button>
      <IoLogOut className='logout__icon' title='logout' /> */}
    </nav>
  );
};

export default VerticalNav;
