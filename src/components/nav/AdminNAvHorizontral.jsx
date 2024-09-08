import { FaSearch } from "react-icons/fa";

const AdminNAvHorizontral = () => {
  return (
    <nav className='adminNav__horizontal'>
      <h1 className='adminNav__horizontal--logo'>KickSpot</h1>
      <form action='' className='adminNav__horizontal--search'>
        <div className='adminNav__horizontal--search-container'>
          <input type='search' name='search' id='search' />
          <button>
            <FaSearch />
          </button>
        </div>
      </form>
      <div className='adminNav__horizonta--userdetails'>
        <div className='adminNav__horizonta--userdetails-details'></div>
        <div className='adminNav__horizonta--userdetails-avatar'></div>
      </div>
    </nav>
  );
};

export default AdminNAvHorizontral;
