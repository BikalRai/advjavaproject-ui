import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Alert, TextField } from "@mui/material";
import { textFieldStyle } from "../../../utils/inputfieldsStyles";
import axios from "axios";
import "./passwordResetRequest.scss";
import { BounceLoader } from "react-spinners";
import { spinnerOverride } from "../../../utils/spinnerCssOverride";

const PasswordResetRequest = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleInput = ({ target: { value } }) => {
    setEmail(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      await axios.post(`http://localhost:8080/api/password/reset-request`, {
        email: email,
      });
      navigate("/otp-verification", {
        state: { userEmail: email },
      });
    } catch (error) {
      if (error.response.status === 404) {
        setError(true);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='passwordResetRequest'>
      {loading ? (
        <BounceLoader color='#fff' size={40} cssOverride={spinnerOverride} />
      ) : (
        <>
          <h1>Enter Email to request OTP</h1>
          {error && (
            <Alert severity='error'>
              Enter email or Account does not exist !!!
            </Alert>
          )}
          <form className='passwordResetRequest__form' onSubmit={handleSubmit}>
            <TextField
              id='outlined-basic'
              label='Enter email'
              variant='outlined'
              sx={textFieldStyle}
              onChange={handleInput}
              value={email}
            />
            <div className='passwordResetRequest__form--actions'>
              <button className='btn__primary'>Submit</button>
              <button
                type='button'
                className='btn__secondary'
                onClick={() => navigate(-1)}
              >
                Cancel
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default PasswordResetRequest;
