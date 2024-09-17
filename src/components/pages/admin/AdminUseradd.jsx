import {
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Modal,
  OutlinedInput,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import {
  textFieldStyle,
  formControlOutlinedStyles,
} from "../../../utils/inputfieldsStyles";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import "./adduser.scss";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const AdminUseradd = () => {
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    password: "",
  });
  const [role, setRole] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [open, setOpen] = useState(false);
  const [successful, setSuccessful] = useState(false);

  const navigate = useNavigate();

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const handleRoleChange = ({ target: { value } }) => {
    setRole(value);
  };

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleUserDetailsChange = ({ target: { name, value } }) => {
    setUserDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("authToken");

      await axios.post(
        "http://localhost:8080/api/users",
        {
          ...userDetails,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setUserDetails((prev) => ({
        ...prev,
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        password: "",
      }));

      setRole("");
      handleOpen();
      setSuccessful(true);

      setTimeout(() => {
        handleClose();
      }, 1000);
    } catch (error) {
      console.log(error.response);
      setSuccessful(false);
      handleOpen();

      setTimeout(() => {
        handleClose();
      }, 1000);
    }
  };

  return (
    <div className='add'>
      <div>
        <Modal
          open={open}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
        >
          <Box sx={style}>
            <Typography id='modal-modal-title' variant='h6' component='h2'>
              {successful ? "SUCCESSFUL" : "Oops ... Something went wrong"}
            </Typography>
          </Box>
        </Modal>
      </div>
      <h1>Add User</h1>
      <form method='POST' onSubmit={handleFormSubmit}>
        <TextField
          id='outlined-basic'
          label='First Name'
          variant='outlined'
          sx={textFieldStyle}
          name='firstName'
          onChange={handleUserDetailsChange}
          value={userDetails.firstName}
        />
        <TextField
          id='outlined-basic'
          label='Last Name'
          variant='outlined'
          sx={textFieldStyle}
          name='lastName'
          onChange={handleUserDetailsChange}
          value={userDetails.lastName}
        />
        <TextField
          id='outlined-basic'
          label='Email'
          variant='outlined'
          sx={textFieldStyle}
          name='email'
          onChange={handleUserDetailsChange}
          value={userDetails.email}
        />
        <TextField
          id='outlined-basic'
          label='Mobile'
          variant='outlined'
          sx={textFieldStyle}
          name='mobile'
          onChange={handleUserDetailsChange}
          value={userDetails.mobile}
        />
        <FormControl sx={formControlOutlinedStyles} variant='outlined'>
          <InputLabel htmlFor='outlined-adornment-password'>
            Password
          </InputLabel>
          <OutlinedInput
            id='outlined-adornment-password'
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position='end'>
                <IconButton
                  aria-label='toggle password visibility'
                  onClick={handleClickShowPassword}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            label='Password'
            name='password'
            onChange={handleUserDetailsChange}
            value={userDetails.password}
          />
        </FormControl>

        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth sx={textFieldStyle}>
            <InputLabel id='demo-simple-select-label'>Role</InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={role}
              label='Age'
              onChange={handleRoleChange}
            >
              <MenuItem value='ROLE_USER'>User</MenuItem>
              <MenuItem value='ROLE_STAFF'>Empolyee</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <div className='buttons'>
          <button className='btn__primary'>Add</button>
          <button
            type='button'
            className='btn__secondary'
            onClick={() => navigate("/users")}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminUseradd;
