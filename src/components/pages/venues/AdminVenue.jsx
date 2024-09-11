import { FaSearch } from "react-icons/fa";
import "./adminvenue.scss";
import { Link } from "react-router-dom";

const AdminVenue = () => {
  return (
    <div className='adminVenue'>
      <h1>Venues</h1>
      <div className='adminVenue__actions'>
        <form>
          <input type='search' placeholder='search' />
          <FaSearch />
        </form>
        <Link to='/venues/add' className='btn__primary'>
          Add
        </Link>
      </div>
      <table className='adminVenue__venues'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Description</th>
            <th>Amenities</th>
            <th>Price</th>
            <th>Operating Hours</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr></tr>
        </tbody>
      </table>
    </div>
  );
};

export default AdminVenue;
