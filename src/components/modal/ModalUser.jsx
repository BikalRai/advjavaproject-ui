import { NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { RiLogoutBoxRFill } from "react-icons/ri";
import PropType from "prop-types";
import "./usermodal.scss";

const ModalUser = ({ isOpen, modalState }) => {
  return (
    <div className={`modalUser ${isOpen ? "open" : "close"}`}>
      <h6 className='modalUser__name'>Full Name</h6>
      <IoMdClose className='modalUser__close' onClick={() => modalState()} />
      <div className='modalUser__link'>
        <FaUser className='modalUser__link--icon' />
        <NavLink>My Profile</NavLink>
      </div>
      <div className='modalUser__link'>
        <RiLogoutBoxRFill className='modalUser__link--icon' />
        <NavLink>Logout</NavLink>
      </div>
    </div>
  );
};

ModalUser.propTypes = {
  isOpen: PropType.bool,
  modalState: PropType.func,
};

export default ModalUser;
