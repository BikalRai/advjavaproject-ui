import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Alert, TextField } from "@mui/material";
import { textFieldStyle } from "../../../utils/inputfieldsStyles";
import axios from "axios";
import "./passwordEmailVerification.scss";
import { RotateLoader } from "react-spinners";
import { spinnerOverride } from "../../../utils/spinnerCssOverride";

const PasswordEmailVerification = () => {
  const [otpDigits, setOtpDigits] = useState({
    digitOne: "",
    digitTwo: "",
    digitThree: "",
    digitFour: "",
    digitFive: "",
    digitSix: "",
  });

  const [otp, setOtp] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const { userEmail } = location.state;

  const navigate = useNavigate();

  const handleOtpDigits = ({ target: { name, value } }) => {
    setOtpDigits((prev) => ({ ...prev, [name]: value }));
  };

  const handleResendOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`http://localhost:8080/api/password/reset-request`, {
        email: userEmail,
      });
      setError(false);
      setOtpDigits({
        digitOne: "",
        digitTwo: "",
        digitThree: "",
        digitFour: "",
        digitFive: "",
        digitSix: "",
      });
    } catch (error) {
      console.log(error.response);
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`http://localhost:8080/api/password/verify-otp`, {
        email: userEmail,
        otp: otp,
      });
      setOtpDigits({
        digitOne: "",
        digitTwo: "",
        digitThree: "",
        digitFour: "",
        digitFive: "",
        digitSix: "",
      });

      navigate("/reset-password", {
        state: {
          userEmail: userEmail,
        },
      });
    } catch (error) {
      if (error.response.status === 401) {
        setError(true);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const otpString = Object.values(otpDigits).join("");
    setOtp(otpString);
  }, [otpDigits]);

  console.log(otp);

  return (
    <div className='passwordEmailVerification'>
      {loading ? (
        <RotateLoader color='#fff' size={50} cssOverride={spinnerOverride} />
      ) : (
        <form
          className='passwordEmailVerification__form'
          onSubmit={handleVerifyOtp}
        >
          {error && <Alert severity='error'>OTP has already expired</Alert>}
          <h1>Enter OTP</h1>
          <div className='passwordEmailVerification__form--digits'>
            <TextField
              id='outlined-basic'
              label=''
              name='digitOne'
              variant='outlined'
              sx={textFieldStyle}
              onChange={handleOtpDigits}
              value={otpDigits.digitOne}
            />
            <TextField
              id='outlined-basic'
              label=''
              name='digitTwo'
              variant='outlined'
              sx={textFieldStyle}
              onChange={handleOtpDigits}
              value={otpDigits.digitTwo}
            />
            <TextField
              id='outlined-basic'
              label=''
              name='digitThree'
              variant='outlined'
              sx={textFieldStyle}
              onChange={handleOtpDigits}
              value={otpDigits.digitThree}
            />
            <TextField
              id='outlined-basic'
              label=''
              name='digitFour'
              variant='outlined'
              sx={textFieldStyle}
              onChange={handleOtpDigits}
              value={otpDigits.digitFour}
            />
            <TextField
              id='outlined-basic'
              label=''
              name='digitFive'
              variant='outlined'
              sx={textFieldStyle}
              onChange={handleOtpDigits}
              value={otpDigits.digitFive}
            />
            <TextField
              id='outlined-basic'
              label=''
              name='digitSix'
              variant='outlined'
              sx={textFieldStyle}
              onChange={handleOtpDigits}
              value={otpDigits.digitSix}
            />
          </div>
          <div className='passwordEmailVerification__form--actions'>
            <button className='btn__primary'>Submit</button>
            <button
              className='btn__primary'
              type='button'
              onClick={handleResendOtp}
            >
              Resend
            </button>
            <button
              className='btn__secondary'
              type='button'
              onClick={() => navigate(-2)}
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default PasswordEmailVerification;
