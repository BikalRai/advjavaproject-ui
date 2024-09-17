import { useEffect, useState } from "react";
import TableComponent from "../../table/TableComponent";
import axios from "axios";
import { IoPersonAddSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import "./adminUsers.scss";
import DisplayModal from "../../modal/DisplayModal";

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const [delSuccess, setDelSuccess] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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

      setDelSuccess(true);

      delSuccess && handleOpen();

      setTimeout(() => {
        handleClose();
      }, 1000);

      setUsers((prev) => prev.filter((u) => u.id !== id));
    } catch (error) {
      setDelSuccess(false);
      handleOpen();

      setTimeout(() => {
        handleClose();
      }, 1000);
      console.log(error.response);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  console.log(users, "users in admin");
  return (
    <div className='adminUsers'>
      <DisplayModal
        handleClose={handleClose}
        handleOpen={handleOpen}
        open={open}
        delSuccess={delSuccess}
      />
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
