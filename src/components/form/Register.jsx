import { useReducer, useRef, useState } from "react";
import {
  MdOutlineMail,
  MdOutlineVisibility,
  MdOutlineVisibilityOff,
} from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import { Link } from "react-router-dom";
import "./form.scss";
import { AiOutlinePhone } from "react-icons/ai";
import { errReducer, initialErrors } from "../../utils/registerErrrutils";

const Register = () => {
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    cPassword: "",
    showPassword: false,
    showCpassword: false,
  });

  const [errors, dispatch] = useReducer(errReducer, initialErrors);

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const cPasswordRef = useRef(null);

  const {
    username,
    email,
    phone,
    cPassword,
    password,
    showPassword,
    showCpassword,
  } = userDetails;

  const {
    usernameErr,
    passwordErr,
    cPasswordErr,
    phoneErr,
    emailErr,
    emailFormatErr,
    phoneFormatErr,
    passwordFormatErr,
    passwordMatchErr,
  } = errors;

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

  const handleFunction = ({ target }) => {
    const { name, value } = target;

    setUserDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleClickShowPassword = () => {
    if (passwordRef.current) {
      passwordRef.current.focus();
    }

    setUserDetails((prev) => ({ ...prev, showPassword: !prev.showPassword }));
  };

  const handleClickShowCpassword = () => {
    if (cPasswordRef.current) {
      cPasswordRef.current.focus();
    }

    setUserDetails((prev) => ({
      ...prev,
      showCpassword: !prev.showCpassword,
    }));
  };

  const handleValidateFields = (field, value, state, dispatch) => {
    let hasError = false;

    const setError = (errorType, errMsg = "") => {
      dispatch({ type: "SET_ERROR", field: errorType, errMsg });
      hasError = true;
    };

    const clearError = (errorType) => {
      dispatch({ type: "CLEAR_ERROR", field: errorType });
    };

    // Clear specific errors for the current field
    clearError(`${field}Err`);
    if (field === "email") {
      clearError("emailFormatErr");
    } else if (field === "phone") {
      clearError("phoneFormatErr");
    } else if (field === "password") {
      clearError("passwordFormatErr");
    }

    if (value.trim() === "") {
      setError(`${field}Err`, "This field cannot be empty");
    } else {
      switch (field) {
        case "email":
          if (!value.includes("@") || !value.includes(".")) {
            setError("emailFormatErr", "Invalid email format");
          }
          break;
        case "phone":
          if (value.length !== 10) {
            setError("phoneFormatErr", "Phone number must be 10 digits");
          }
          break;
        case "password":
          if (value.length < 8) {
            setError("passwordFormatErr", "Password must be 8 characters long");
          }

          if (!specialChars.some((char) => value.includes(char))) {
            setError(
              "passwordFormatErr",
              "Password must have at least one special character"
            );
          }
          break;
        case "cPassword":
          if (value !== state.password) {
            setError("passwordMatchErr", "Passwords do not match");
          }
          break;
        default:
          break;
      }
    }

    return hasError;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const fields = [
      { field: "username", value: username },
      { field: "email", value: email },
      { field: "phone", value: phone },
      { field: "password", value: password },
      { field: "cPassword", value: cPassword },
    ];

    const hasErrors = fields.some(({ field, value }) => {
      handleValidateFields(field, value, userDetails, dispatch);
    });

    if (hasErrors) {
      return;
    }

    console.log("login!!");
  };

  console.log(errors);
  return (
    <div className='form'>
      <form action='' className='form__els' name='register' method='POST'>
        <div className='fields'>
          <h1>SIGN UP</h1>

          <div className={`input__field ${username ? "filled" : ""}`}>
            <div className='field'>
              <input
                type='text'
                id='username'
                name='username'
                ref={usernameRef}
                onChange={handleFunction}
                value={username}
              />
              <RxAvatar className='icon' />
            </div>
            <p className='err'>{usernameErr && `Username is required!!`}</p>
            <label htmlFor='usernameoremail'>Username </label>
          </div>

          <div className={`input__field ${email ? "filled" : ""}`}>
            <div className='field'>
              <input
                type='text'
                id='email'
                name='email'
                ref={usernameRef}
                onChange={handleFunction}
                value={email}
              />
              <MdOutlineMail className='icon' />
            </div>
            <p className='err'>{emailErr && `Email is required`}</p>
            <p className='err'>{emailFormatErr && "Email requires @ and ."}</p>
            <label htmlFor='email'>Email </label>
          </div>

          <div className={`input__field ${phone ? "filled" : ""}`}>
            <div className='field'>
              <input
                type='text'
                id='phone'
                name='phone'
                ref={usernameRef}
                onChange={handleFunction}
                value={phone}
              />
              <AiOutlinePhone className='icon' />
            </div>
            <p className='err'>{phoneErr && `Phone is required !!`}</p>
            <p className='err'>
              {phoneFormatErr && "Phone must be at least 10 character"}
            </p>
            <label htmlFor='usernameoremail'>Phone </label>
          </div>

          <div className={`input__field ${password ? "filled" : ""}`}>
            <div className='field'>
              <input
                type={`${showPassword ? "text" : "password"}`}
                id='password'
                name='password'
                ref={passwordRef}
                onChange={handleFunction}
                value={password}
              />
              {showPassword ? (
                <MdOutlineVisibilityOff
                  className='icon'
                  onClick={handleClickShowPassword}
                />
              ) : (
                <MdOutlineVisibility
                  className='icon'
                  onClick={handleClickShowPassword}
                />
              )}
            </div>
            <label htmlFor='password'>Password</label>
            <p className='err'>{passwordErr && `Password is required !!`}</p>
            <p className='err'>
              {passwordFormatErr &&
                "Password must be 8 characters long and have a special character"}
            </p>
            <p className='err'>
              {passwordMatchErr && `Passwords do not match`}
            </p>
          </div>

          <div className={`input__field ${password ? "filled" : ""}`}>
            <div className='field'>
              <input
                type={`${showCpassword ? "text" : "password"}`}
                id='cPassword'
                name='cPassword'
                ref={cPasswordRef}
                onChange={handleFunction}
                value={cPassword}
              />
              {showCpassword ? (
                <MdOutlineVisibilityOff
                  className='icon'
                  onClick={handleClickShowCpassword}
                />
              ) : (
                <MdOutlineVisibility
                  className='icon'
                  onClick={handleClickShowCpassword}
                />
              )}
            </div>
            <label htmlFor='password'>Confirm Password</label>
            <p className='err'>
              {cPasswordErr && `Confirm Password is required!!`}
            </p>
          </div>
          <button
            type='submit'
            className='btn btn__primary'
            onClick={handleSubmit}
          >
            SIGN IN
          </button>

          <div className='login__links'>
            <p>
              {`Don't have an account?`} <Link to='/'>Sign In</Link>
            </p>
          </div>
        </div>
        <div className='image'>
          <div className='overlay'>
            <h2>Welcome To</h2>
            <h1>KickSpot</h1>
            <h3>Sign up to gain access</h3>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
