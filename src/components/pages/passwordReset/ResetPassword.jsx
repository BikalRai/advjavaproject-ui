import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./resetPassword.scss";
import {
  Alert,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { formControlOutlinedStyles } from "../../../utils/inputfieldsStyles";
import axios from "axios";
import { ClimbingBoxLoader } from "react-spinners";
import { spinnerOverride } from "../../../utils/spinnerCssOverride";

const ResetPassword = () => {
  const [password, setPassword] = useState({
    password: "",
    cPassword: "",
  });

  const location = useLocation();
  const { userEmail } = location.state;
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handlePasswordInputs = ({ target: { name, value } }) => {
    setPassword((prev) => ({ ...prev, [name]: value }));
  };

  const handlePasswordResetSubmit = async (e) => {
    e.preventDefault();

    if (password.password !== password.cPassword) {
      setError(true);
      return;
    }

    setLoading(true);
    try {
      await axios.post(`http://localhost:8080/api/password/reset`, {
        email: userEmail,
        password: password.password,
      });
      setSuccess(true);

      navigate("/login");
    } catch (error) {
      console.log(error.response);
    } finally {
      setLoading(false);
      setSuccess(false);
    }
  };

  return (
    <div className='resetPassword'>
      {loading ? (
        <ClimbingBoxLoader
          color='#fff'
          size={50}
          cssOverride={spinnerOverride}
        />
      ) : (
        <form
          className='resetPassword__form'
          onSubmit={handlePasswordResetSubmit}
        >
          {success && (
            <Alert severity='success'>Password reset has been successful</Alert>
          )}
          {error && <Alert severity='error'>Passwords do not match</Alert>}
          <h3>Reset Password</h3>
          <FormControl
            sx={{ ...formControlOutlinedStyles, m: 1, width: "25ch" }}
            variant='outlined'
          >
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
                    edge='end'
                    sx={{
                      color: "#dee3e1",
                      "&:hover": {
                        color: "#27d483",
                      },
                    }}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              label='Password'
              name='password'
              onChange={handlePasswordInputs}
              value={password.password}
            />
          </FormControl>
          <FormControl
            sx={{ ...formControlOutlinedStyles, m: 1, width: "25ch" }}
            variant='outlined'
          >
            <InputLabel htmlFor='outlined-adornment-password'>
              Password
            </InputLabel>
            <OutlinedInput
              id='outlined-adornment-cPassword'
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={handleClickShowPassword}
                    edge='end'
                    sx={{
                      color: "#dee3e1",
                      "&:hover": {
                        color: "#27d483",
                      },
                    }}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              label='Confirm Password'
              name='cPassword'
              onChange={handlePasswordInputs}
              value={password.cPassword}
            />
          </FormControl>
          <button className='btn__primary'>Reset Password</button>
        </form>
      )}
    </div>
  );
};

export default ResetPassword;
