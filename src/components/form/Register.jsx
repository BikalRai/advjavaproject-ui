import { useReducer, useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { errReducer, initialErrors } from "../../utils/registerErrrutils";
import axios from "axios";
import { IoMdArrowRoundBack } from "react-icons/io";
import {
  Alert,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import { formControlStyles } from "../../utils/inputfieldsStyles";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import "./registerForm.scss";

const Register = () => {
  const [userDetails, setUserDetails] = useState({
    // username: "",
    email: "",
    mobile: "",
    password: "",
    cPassword: "",
    showPassword: false,
    showCpassword: false,
  });

  const [errors, dispatch] = useReducer(errReducer, initialErrors);

  const { email, mobile, cPassword, password, showPassword, showCpassword } =
    userDetails;

  const {
    passwordErr,
    passwordLengthErr,
    phoneErr,
    emailErr,
    emailFormatErr,
    phoneFormatErr,
    passwordFormatErr,
    passwordMatchErr,
  } = errors;

  const [takenErrorMsg, setTakenErrorMsg] = useState("");

  const specialChars = [
    "@",
    "!",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "_",
    "-",
    "+",
    "=",
    "<",
    ">",
    "/",
    "?",
    ",",
    ".",
  ];

  const navigate = useNavigate();

  const handleFunction = ({ target }) => {
    const { name, value } = target;

    setUserDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleClickShowPassword = () => {
    setUserDetails((prev) => ({ ...prev, showPassword: !prev.showPassword }));
  };

  const handleClickShowCpassword = () => {
    setUserDetails((prev) => ({
      ...prev,
      showCpassword: !prev.showCpassword,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // reset all errors before validation
    dispatch({ type: "RESET_ERRORS" });

    let hasErrors = false;

    // helper function to check for special characters
    const containsSpecialChar = (password) => {
      return specialChars.some((char) => password.includes(char));
    };

    // email validation
    if (!email.trim()) {
      dispatch({ type: "SET_ERROR", field: "emailErr" });
      hasErrors = true;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      dispatch({ type: "SET_ERROR", field: "emailFormatErr" });
      hasErrors = true;
    }

    // phone validation
    if (!mobile.trim()) {
      dispatch({ type: "SET_ERROR", field: "phoneErr" });
      hasErrors = true;
    } else if (mobile.length !== 10) {
      dispatch({ type: "SET_ERROR", field: "phoneFormatErr" });
      hasErrors = true;
    }

    // password validation
    if (!password.trim()) {
      dispatch({ type: "SET_ERROR", field: "passwordErr" });
      hasErrors = true;
    } else if (password.length < 8) {
      dispatch({ type: "SET_ERROR", field: "passwordLengthErr" });
      hasErrors = true;
    } else if (!containsSpecialChar(password)) {
      dispatch({ type: "SET_ERROR", field: "passwordFormatErr" });
      hasErrors = true;
    }

    // cPassword validation
    if (password !== cPassword) {
      dispatch({ type: "SET_ERROR", field: "passwordMatchErr" });
      hasErrors = true;
    }

    if (hasErrors) {
      return;
    }

    try {
      await axios.post("http://localhost:8080/api/v1/auth/register", {
        email: email,
        mobile: mobile,
        password: password,
      });

      navigate("/login");
    } catch (error) {
      console.log(error.response);
      if (error.response) {
        if (error.response.status === 403 || error.response.status === 409) {
          setTakenErrorMsg("Email / Mobile already registered");
        }
      }
    }
  };

  return (
    <div className='form'>
      <>
        {takenErrorMsg && <Alert severity='error'>{takenErrorMsg}</Alert>}
        <form
          className='form__els'
          name='register'
          method='POST'
          onSubmit={handleSubmit}
        >
          <div className='form__els--head'>
            <h1>Sign Up to KickSpot</h1>
            <button
              className='btn__primary back_btn'
              type='button'
              onClick={() => navigate("/")}
            >
              <IoMdArrowRoundBack />
            </button>
          </div>
          <FormControl sx={formControlStyles} variant='standard'>
            <InputLabel htmlFor='email'>Email</InputLabel>
            <Input
              id='email'
              type='text'
              name='email'
              onChange={handleFunction}
              value={email}
            />
            {emailErr && (
              <span className='err'>Email Field cannot be empty</span>
            )}
            {emailFormatErr && (
              <span className='err'>Email must contain @ and .</span>
            )}
          </FormControl>
          <FormControl sx={formControlStyles} variant='standard'>
            <InputLabel htmlFor='mobile'>Mobile</InputLabel>
            <Input
              id='mobile'
              type='text'
              name='mobile'
              onChange={handleFunction}
              value={mobile}
            />
            {phoneErr && (
              <span className='err'>Mobile Field cannot be empty</span>
            )}
            {phoneFormatErr && (
              <span className='err'>Mobile number must be of length 10</span>
            )}
          </FormControl>
          <FormControl sx={formControlStyles} variant='standard'>
            <InputLabel htmlFor='password'>Password</InputLabel>
            <Input
              id='password'
              type={showPassword ? "text" : "password"}
              name='password'
              onChange={handleFunction}
              value={password}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={handleClickShowPassword}
                  >
                    {showPassword ? (
                      <VisibilityOff className='visibilityIcon' />
                    ) : (
                      <Visibility className='visibilityIcon' />
                    )}
                  </IconButton>
                </InputAdornment>
              }
            />
            {passwordErr && (
              <span className='err'>Password Field cannot be empty</span>
            )}
            {passwordLengthErr && (
              <span className='err'>
                Password must be at least 8 characters long
              </span>
            )}
            {passwordFormatErr && (
              <span className='err'>
                Password must contain a special character
              </span>
            )}
          </FormControl>
          <FormControl sx={formControlStyles} variant='standard'>
            <InputLabel htmlFor='cPassword'>Confirm Password</InputLabel>
            <Input
              id='cPassword'
              type={showCpassword ? "text" : "password"}
              name='cPassword'
              onChange={handleFunction}
              value={cPassword}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={handleClickShowCpassword}
                  >
                    {showCpassword ? (
                      <VisibilityOff className='visibilityIcon' />
                    ) : (
                      <Visibility className='visibilityIcon' />
                    )}
                  </IconButton>
                </InputAdornment>
              }
            />
            {passwordMatchErr && (
              <span className='err'>The two passwords do not match</span>
            )}
          </FormControl>
          <button type='submit' className='btn btn__primary'>
            SIGN UP
          </button>

          <div className='links'>
            <p>
              {`Don't have an account? `} <Link to='/login'>Sign In</Link>
            </p>
          </div>
        </form>
      </>
    </div>
  );
};

export default Register;
