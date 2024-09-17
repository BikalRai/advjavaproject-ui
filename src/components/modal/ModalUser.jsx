import { useContext } from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { RiLogoutBoxRFill } from "react-icons/ri";
import PropType from "prop-types";
import { AuthContext } from "../../utils/AuthProvider";
import "./usermodal.scss";

const ModalUser = ({ isOpen, modalState }) => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className={`modalUser ${isOpen ? "open" : "close"}`}>
      <h6 className='modalUser__name'>
        {user
          ? `${user.firstName} ${user.lastName}`
          : `Edit profile to show your name`}
      </h6>
      <IoMdClose className='modalUser__close' onClick={() => modalState()} />
      <div className='modalUser__link'>
        <FaUser className='modalUser__link--icon' />
        <Link>My Profile</Link>
      </div>
      <div className='modalUser__link'>
        <RiLogoutBoxRFill className='modalUser__link--icon' />
        <button className='btn' onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
};

ModalUser.propTypes = {
  isOpen: PropType.bool,
  modalState: PropType.func,
};

export default ModalUser;
