import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { RiEditBoxFill } from "react-icons/ri";
import { MdDeleteForever } from "react-icons/md";
import "./adminvenue.scss";

const AdminVenue = () => {
  const [venues, setVenues] = useState([]);

  const getAllVenues = async () => {
    try {
      const token = localStorage.getItem("authToken");

      const res = await axios.get("http://localhost:8080/api/venues", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setVenues(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleDeleteVenue = async (id) => {
    try {
      const token = localStorage.getItem("authToken");
      const res = await axios.delete(
        `http://localhost:8080/api/venues/delete/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setVenues((prev) => prev.filter((venue) => venue.id !== id));
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllVenues();
  }, []);

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
          {Array.isArray(venues) &&
            venues?.map((venue) => (
              <tr key={venue.id}>
                <td>{venue.name}</td>
                <td>{venue.location}</td>
                <td>{venue.description}</td>
                <td>{venue.amenities}</td>
                <td>{venue.price}</td>
                <td>{`${venue.openingTime} to ${venue.closingTime}`}</td>
                <td>
                  <img
                    src={`data:image/jpeg;base64, ${venue.image}`}
                    alt={venue.name}
                  />
                </td>
                <td>
                  <RiEditBoxFill className='icon' />
                  <MdDeleteForever
                    className='icon'
                    onClick={() => handleDeleteVenue(venue.id)}
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminVenue;
