import { FaSearch } from "react-icons/fa";

import "./horizontalnav.scss";
import UserAvatar from "../useravatar/UserAvatar";

const AdminNavHorizontral = () => {
  return (
    <nav className='adminNav__horizontal'>
      <div className='adminNav__horizontal_left'>
        <h1 className='adminNav__horizontal_left--logo'>KickSpot</h1>
        <form action='' className='adminNav__horizontal_left--search'>
          <div className='adminNav__horizontal_left--search-container'>
            <input
              type='search'
              name='search'
              id='search'
              placeholder='Search'
            />
            <button>
              <FaSearch className='icon' />
            </button>
          </div>
        </form>
      </div>
      <div className='adminNav__horizontal--userdetails'>
        <div className='adminNav__horizontal--userdetails-details'>
          <p>Logged in as:</p>
          <p className='name'>Full Name</p>
        </div>
        <UserAvatar />
      </div>
    </nav>
  );
};

export default AdminNavHorizontral;
