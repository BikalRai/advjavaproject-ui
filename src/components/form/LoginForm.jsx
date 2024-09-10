import { useRef, useState } from "react";
import { RxAvatar } from "react-icons/rx";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";
import { Link } from "react-router-dom";
import "./form.scss";
import axios from "axios";

const LoginForm = () => {
  const [loginDetails, setLoginDetails] = useState({
    emailOrMobile: "",
    password: "",
    showPassword: false,
    loginError: false,
    emptyUserError: false,
    emptyPasswordError: false,
  });

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const {
    emailOrMobile,
    password,
    showPassword,
    loginError,
    emptyUserError,
    emptyPasswordError,
  } = loginDetails;

  const handleUsernameOrEmail = ({ target: { value } }) => {
    setLoginDetails((prev) => ({ ...prev, emailOrMobile: value }));
  };

  const handlePassword = ({ target: { value } }) => {
    setLoginDetails((prev) => ({ ...prev, password: value }));
  };

  const handleClickShowPassword = () => {
    if (passwordRef.current) {
      passwordRef.current.focus();
    }

    setLoginDetails((prev) => ({ ...prev, showPassword: !prev.showPassword }));
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

    // if (emailOrMobile === "sam" && password === "123") {
    //   console.log("Login");
    //   setLoginDetails((prev) => ({
    //     ...prev,
    //     usernameOrEmail: "",
    //     password: "",
    //     loginError: false,
    //     emptyError: false,
    //   }));
    // } else {
    //   setLoginDetails((prev) => ({
    //     ...prev,
    //     loginError: true,
    //     emptyError: false,
    //   }));
    // }

    if (usernameRef.current) {
      usernameRef.current.blur();
    }
    if (passwordRef.current) {
      passwordRef.current.blur();
    }

    try {
      const res = await axios.post(
        "http://localhost:8080/api/v1/auth/authenticate",
        {
          emailOrMobile: emailOrMobile,
          password: password,
        }
      );

      const token = res.data.token;

      console.log(res);
      console.log(token);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className='form'>
      <form action='' className='form__els' name='login' method='POST'>
        <div className='image'>
          <div className='overlay'>
            <h2>Welcome To</h2>
            <h1>KickSpot</h1>
            <h3>Sign in to Continue access</h3>
          </div>
        </div>
        <div className='fields'>
          <h1>Sign In</h1>
          <p className='err'>
            {loginError && `Username or Email does not exist!!`}
          </p>

          {/* <hr /> */}

          <div className={`input__field ${emailOrMobile ? "filled" : ""}`}>
            <div className='field'>
              <input
                type='text'
                id='usernameoremail'
                name='usernameoremail'
                ref={usernameRef}
                onChange={handleUsernameOrEmail}
                value={emailOrMobile}
              />
              <RxAvatar className='icon' />
            </div>
            {emptyUserError && <p>Email or Mobile Required</p>}
            <label htmlFor='usernameoremail'>Email or Mobile</label>
          </div>

          <div className={`input__field ${password ? "filled" : ""}`}>
            <div className='field'>
              <input
                type={`${showPassword ? "text" : "password"}`}
                id='password'
                name='password'
                ref={passwordRef}
                onChange={handlePassword}
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
            {emptyPasswordError && <p>Password Required</p>}
            <label htmlFor='password'>Password</label>
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
              {`Don't have an account?`} <Link to='/signup'>Sign Up</Link>
            </p>
            {/* <Link to='/'>Forgot Password?</Link> */}
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
