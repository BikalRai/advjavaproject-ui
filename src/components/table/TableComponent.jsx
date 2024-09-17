import { useEffect, useState } from "react";
import { RiEditCircleFill } from "react-icons/ri";
import { MdDeleteForever } from "react-icons/md";
import PropType from "prop-types";
import axios from "axios";
import "./tableComponent.scss";

const TableComponent = ({ allUsers, deleteFunc }) => {
  const [userBookingsMap, setUserBookingsMap] = useState({});

  const getUserBookings = async (userId) => {
    try {
      const token = localStorage.getItem("authToken");
      const res = await axios.get(
        `http://localhost:8080/api/bookings/${userId}/bookings`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Set the fetched booking data in the state
      setUserBookingsMap((prevBookingsMap) => ({
        ...prevBookingsMap,
        [userId]: res.data.length, // Store the length of bookings for this user
      }));
    } catch (error) {
      console.log(error.response);
    }
  };

  // Fetch bookings for all users when the component mounts
  useEffect(() => {
    allUsers.forEach((user) => {
      getUserBookings(user.id);
    });
  }, [allUsers]);

  return (
    <div className='table__container'>
      <table className='table'>
        <thead>
          <tr>
            <th>User ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Image</th>
            <th>No. of bookings</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {allUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.mobile}</td>
              <td>
                <img
                  src={`data:image/jpeg;base64,${user.image}`}
                  alt={`${user.firstName} ${user.lastName}`}
                />
              </td>
              <td>
                {userBookingsMap[user.id] !== undefined
                  ? userBookingsMap[user.id]
                  : 0}
              </td>
              <td className='actions'>
                <RiEditCircleFill className='icon' title='Edit' />
                <MdDeleteForever
                  className='icon'
                  title='Delete'
                  onClick={() => deleteFunc(user.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

TableComponent.propTypes = {
  allUsers: PropType.array,
  deleteFunc: PropType.func,
};

export default TableComponent;
