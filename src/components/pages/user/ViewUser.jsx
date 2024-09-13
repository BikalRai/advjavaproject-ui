import { TextField } from "@mui/material";
import "./viewuser.scss";
import { textFieldStyle } from "../../../utils/inputfieldsStyles";
import ImageUploader from "../../imageUpload/ImageUploader";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../../utils/AuthProvider";
import { Link } from "react-router-dom";
const ViewUser = () => {
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
  });

  const [image, setImage] = useState(null);

  console.log(image);

  const { user, setUser } = useContext(AuthContext);
  console.log(user.id, "id");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Build the payload for submission, including userDetails and image
    const payload = {
      ...userDetails,
      image: image,
    };

    try {
      const res = await axios.put(
        `http://localhost:8080/api/updateUser/${user.id}`,
        payload
      );
      console.log("User updated:", res.data);
      setImage(null); // Clear image after submission
      setUser(payload);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    setUserDetails(user);
  }, []);

  return (
    <div className='view container'>
      <h1>Profile</h1>
      <form className='view__form' onSubmit={handleSubmit}>
        <TextField
          id='outlined-basic'
          label='First Name'
          variant='outlined'
          sx={textFieldStyle}
          name='firstName'
          onChange={handleInputChange}
          value={userDetails.firstName}
        />
        <TextField
          id='outlined-basic'
          label='Last Name'
          variant='outlined'
          sx={textFieldStyle}
          name='lastName'
          onChange={handleInputChange}
          value={userDetails.lastName}
        />
        <TextField
          id='outlined-basic'
          label='Email'
          variant='outlined'
          sx={textFieldStyle}
          name='email'
          onChange={handleInputChange}
          value={userDetails.email}
        />
        <TextField
          id='outlined-basic'
          label='Mobile'
          variant='outlined'
          sx={textFieldStyle}
          name='mobile'
          onChange={handleInputChange}
          value={userDetails.mobile}
        />

        <ImageUploader setImage={setImage} />
        <div className='view__form--btns'>
          <button className='btn__primary'>Update</button>
          <Link to='/'>
            <button type='button ' className='btn__secondary'>
              Cancel
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default ViewUser;
