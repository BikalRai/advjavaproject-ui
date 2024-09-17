import { useEffect, useState } from "react";
import TableComponent from "../../table/TableComponent";
import "./adminUsers.scss";
import axios from "axios";
import { IoPersonAddSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const AdminUsers = () => {
  const [users, setUsers] = useState([]);

  const getAllUsers = async () => {
    try {
      const token = localStorage.getItem("authToken");

      const res = await axios.get(`http://localhost:8080/api/users`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUsers(res.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  const handleDeleteUser = async (id) => {
    try {
      const token = localStorage.getItem("authToken");

      await axios.delete(`http://localhost:8080/api/users/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUsers((prev) => prev.filter((u) => u.id !== id));
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  console.log(users, "users in admin");
  return (
    <div className='adminUsers'>
      <div className='adminUsers__head'>
        <h1>Users</h1>
        <Link to='/users/add' className='btn__primary'>
          <IoPersonAddSharp className='icon' />
        </Link>
      </div>
      <TableComponent allUsers={users} deleteFunc={handleDeleteUser} />
    </div>
  );
};

export default AdminUsers;
