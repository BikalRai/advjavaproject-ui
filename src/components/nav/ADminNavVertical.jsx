import { FaUsers } from "react-icons/fa";
import { MdDashboard, MdLocationCity } from "react-icons/md";
import { RiCalendarScheduleFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const ADminNavVertical = () => {
  return (
    <nav className='adminNav__vertical'>
      <ul className='adminNav__horizontal--navlinks'>
        <li className='adminNav__horizontal--navlinks-link'>
          <NavLink>
            <MdDashboard />
            <span>Dashboard</span>
          </NavLink>
        </li>
        <li className='adminNav__horizontal--navlinks-link'>
          <NavLink>
            <FaUsers />
            <span>Users</span>
          </NavLink>
        </li>
        <li className='adminNav__horizontal--navlinks-link'>
          <NavLink>
            <RiCalendarScheduleFill />
            <span>Bookings</span>
          </NavLink>
        </li>
        <li className='adminNav__horizontal--navlinks-link'>
          <NavLink>
            <MdLocationCity />
            <span>Venues</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default ADminNavVertical;
