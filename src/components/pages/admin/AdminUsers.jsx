import { useCallback, useEffect, useMemo, useState } from "react";
import TableComponent from "../../table/TableComponent";
import axios from "axios";
import { IoPersonAddSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import DisplayModal from "../../modal/DisplayModal";
import { PacmanLoader } from "react-spinners";
import { spinnerOverride } from "../../../utils/spinnerCssOverride";
import "./adminUsers.scss";

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const [delSuccess, setDelSuccess] = useState(false);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleOpen = useCallback(() => setOpen(true), []);
  const handleClose = useCallback(() => setOpen(false), []);

  const getAllUsers = useCallback(async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("authToken");
      const res = await axios.get(`http://localhost:8080/api/users`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUsers(res.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [setLoading]);

  const handleDeleteUser = useCallback(
    async (id) => {
      setLoading(true);
      try {
        const token = localStorage.getItem("authToken");
        await axios.delete(`http://localhost:8080/api/users/delete/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUsers((prev) => prev.filter((u) => u.id !== id));
        setDelSuccess(true);
      } catch (error) {
        console.error("Error deleting user:", error);
        setDelSuccess(false);
      } finally {
        setLoading(false);
        handleOpen();
        setTimeout(handleClose, 1000);
      }
    },
    [setLoading, handleOpen, handleClose]
  );

  useEffect(() => {
    getAllUsers();
  }, [getAllUsers]);

  const memoizedTableComponent = useMemo(
    () => <TableComponent allUsers={users} deleteFunc={handleDeleteUser} />,
    [users, handleDeleteUser]
  );

  return (
    <div className='adminUsers'>
      {loading ? (
        <PacmanLoader color='#fff' size={40} cssOverride={spinnerOverride} />
      ) : (
        <>
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
          {memoizedTableComponent}
        </>
      )}
    </div>
  );
};

export default AdminUsers;
