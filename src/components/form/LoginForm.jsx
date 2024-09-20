import { useContext, useEffect, useState } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../utils/AuthProvider";
import { IoMdArrowRoundBack } from "react-icons/io";
import { jwtDecode } from "jwt-decode";
import {
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import { formControlStyles } from "../../utils/inputfieldsStyles";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import "./form.scss";
import { PacmanLoader } from "react-spinners";
import { spinnerOverride } from "../../utils/spinnerCssOverride";
import InfoModal from "../modal/InfoModal";

const LoginForm = () => {
  const [loginDetails, setLoginDetails] = useState({
    emailOrMobile: "",
    password: "",
    showPassword: false,
    loginError: false,
    emptyUserError: false,
    emptyPasswordError: false,
  });

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleClickShowPassword = () => {
    setLoginDetails((prev) => ({ ...prev, showPassword: !prev.showPassword }));
  };

  const {
    emailOrMobile,
    password,
    showPassword,
    emptyUserError,
    emptyPasswordError,
  } = loginDetails;

  // auth provider context
  const { setToken, setRoles, setUser, setIsloggedInStatus } =
    useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  console.log(location, "LOCATION!!!");

  const [loading, setLoading] = useState(false);

  const handleUsernameOrEmail = ({ target: { value } }) => {
    setLoginDetails((prev) => ({ ...prev, emailOrMobile: value }));
  };

  const handlePassword = ({ target: { value } }) => {
    setLoginDetails((prev) => ({ ...prev, password: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isError = false;

    if (emailOrMobile === "") {
      setLoginDetails((prev) => ({
        ...prev,
        emptyUserError: true,
      }));
      isError = true;
    } else {
      isError = false;
      setLoginDetails((prev) => ({
        ...prev,
        emptyUserError: false,
      }));
    }

    if (password === "") {
      setLoginDetails((prev) => ({ ...prev, emptyPasswordError: true }));
      isError = true;
    } else {
      isError = false;
      setLoginDetails((prev) => ({
        ...prev,
        emptyPasswordError: false,
      }));
    }

    if (isError) return;
    setLoading(true);
    // user login and setting token
    try {
      const res = await axios.post(
        "http://localhost:8080/api/v1/auth/authenticate",
        {
          emailOrMobile: emailOrMobile,
          password: password,
        }
      );

      const token = res?.data?.token;

      if (token) {
        setToken(token);
        setIsloggedInStatus(true);

        const decodedToken = jwtDecode(token);
        setRoles(decodedToken.roles);

        localStorage.setItem("authToken", token);
        localStorage.setItem("userRoles", decodedToken.roles);

        const userRes = await axios.get(
          `http://localhost:8080/api/users/mobile`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            params: {
              mobile: decodedToken.sub,
            },
          }
        );

        setUser(userRes.data);

        navigate("/");
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (location.state?.success) {
      handleOpen();
      setTimeout(() => {
        handleClose();
      }, 3000);
    }
  }, [location]);

  return (
    <div className='form'>
      {loading ? (
        <PacmanLoader color='#fff' size={40} cssOverride={spinnerOverride} />
      ) : (
        <form
          className='form__els'
          name='login'
          method='POST'
          onSubmit={handleSubmit}
        >
          <div className='form__els--head'>
            <h1>Login to KickSpot</h1>
            <button
              type='button'
              className='btn__primary back_btn'
              onClick={() => navigate("/")}
            >
              <IoMdArrowRoundBack />
            </button>
          </div>

          <div className='form__els--inputs'>
            <FormControl sx={formControlStyles} variant='standard'>
              <InputLabel htmlFor='emailOrMobile'>Email or Mobile</InputLabel>
              <Input
                id='emailOrMobile'
                type='text'
                onChange={handleUsernameOrEmail}
                value={loginDetails.emailOrMobile}
              />
              {emptyUserError && (
                <span className='err'>Email or mobile cannot be empty</span>
              )}
            </FormControl>
            <FormControl sx={formControlStyles} variant='standard'>
              <InputLabel htmlFor='password'>Password</InputLabel>
              <Input
                id='password'
                type={showPassword ? "text" : "password"}
                onChange={handlePassword}
                value={loginDetails.password}
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
              {emptyPasswordError && (
                <span className='err'>Password cannot be empty</span>
              )}
            </FormControl>

            <button className='btn__primary'>LOGIN</button>

            <div className='form__els--inputs-links'>
              <p>
                {`Don't have an accout? `}
                <Link to='/signup'>Sign up</Link>
              </p>
              <Link>Forgot password?</Link>
            </div>
          </div>
        </form>
      )}
      <InfoModal open={open} handleClose={handleClose} />
    </div>
  );
};

export default LoginForm;
