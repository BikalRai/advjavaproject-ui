import { Link } from "react-router-dom";
import "./forbidden.scss";
const Forbidden = () => {
  return (
    <div className='forbidden container'>
      <img src='images/forbidden.jpg' alt='403 Forbidden' />
      <Link to='/' className='btn__primary'>
        Go Back to Home
      </Link>
    </div>
  );
};

export default Forbidden;
