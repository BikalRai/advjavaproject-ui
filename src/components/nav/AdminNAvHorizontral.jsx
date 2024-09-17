import { FaSearch } from "react-icons/fa";

import "./horizontalnav.scss";
import UserAvatar from "../useravatar/UserAvatar";
import ModalUser from "../modal/ModalUser";
import { useState } from "react";

const AdminNavHorizontral = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleModalIsOpen = () => {
    setModalIsOpen((prev) => !prev);
  };

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
        <button className='btn__modal' onClick={handleModalIsOpen}>
          <UserAvatar />
        </button>

        <ModalUser isOpen={modalIsOpen} modalState={handleModalIsOpen} />
      </div>
    </nav>
  );
};

export default AdminNavHorizontral;
