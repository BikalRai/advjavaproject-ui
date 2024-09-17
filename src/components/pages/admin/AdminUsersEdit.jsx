import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FloatingLabelInput from "../../inputfield/FloatingLabelInput";
import axios from "axios";
import "./useredit.scss";
import ImageUploader from "../../imageUpload/ImageUploader";
import { Box, Modal, Typography } from "@mui/material";
import { IoMdArrowRoundBack } from "react-icons/io";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#333",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const AdminUsersEdit = () => {
  const { id } = useParams();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [userById, setUserById] = useState({});

  const [editUserDetails, setEditUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
  });

  const [image, setImage] = useState("");
  const navigate = useNavigate();

  const handleInput = ({ target: { name, value } }) => {
    setEditUserDetails((prev) => ({ ...prev, [name]: value }));
  };

  const getUserById = async (userId) => {
    try {
      const token = localStorage.getItem("authToken");

      const res = await axios.get(`http://localhost:8080/api/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUserById(res.data);

      setEditUserDetails((prev) => ({
        ...prev,
        firstName: res.data.firstName,
        lastName: res.data.lastName,
        email: res.data.email,
        mobile: res.data.mobile,
      }));
    } catch (error) {
      console.log(error.response);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("authToken");
      const res = await axios.put(
        `http://localhost:8080/api/users/updateUser/${id}`,
        {
          firstName: editUserDetails.firstName,
          lastName: editUserDetails.lastName,
          email: editUserDetails.email,
          mobile: editUserDetails.mobile,
          image: image,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      handleOpen();

      setTimeout(() => {
        handleClose();
        navigate("/users");
      }, 1000);

      console.log(res);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    getUserById(id);
  }, []);

  console.log(userById, "by id");
  return (
    <div className='edit' onSubmit={handleFormSubmit}>
      <div className='edit__head'>
        <h1>Edit</h1>
        <button className='btn__primary'>
          <IoMdArrowRoundBack />
        </button>
      </div>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
        >
          <Box sx={style}>
            <Typography
              id='modal-modal-title'
              variant='h6'
              component='h2'
              sx={{ color: "#dee3e1" }}
            >
              Successfully updated the user details
            </Typography>
          </Box>
        </Modal>
      </div>
      <form method='PUT'>
        <FloatingLabelInput
          label='First Name'
          fieldName='firstName'
          inputValue={editUserDetails.firstName}
          setInputValue={handleInput}
        />
        <FloatingLabelInput
          label='Last Name'
          fieldName='lastName'
          inputValue={editUserDetails.lastName}
          setInputValue={handleInput}
        />
        <FloatingLabelInput
          label='Email'
          fieldName='email'
          inputValue={editUserDetails.email}
          setInputValue={handleInput}
        />
        <FloatingLabelInput
          label='Mobile'
          fieldName='mobile'
          inputValue={editUserDetails.mobile}
          setInputValue={handleInput}
        />
        <ImageUploader setImage={setImage} />

        <button className='btn__primary'>SUBMIT</button>
      </form>
    </div>
  );
};

export default AdminUsersEdit;
