import { IoMdArrowRoundBack } from "react-icons/io";
import ProfileField from "../../inputfield/ProfileField";
import "./userprofile.scss";
import { useState } from "react";

const UserProfile = () => {
  const [userDetails, setUserDetails] = useState({
    username: "Sabin Thapa",
    address: "Nakhipot - 14, Lalitpur",
    contact: "9818271811",
    team: "Kondo FC",
  });
  const [isReadOnly, setIsReadOnly] = useState({
    usernam: true,
    address: true,
    contact: true,
    team: true,
  });

  const handleFunction = ({ target }) => {
    const { name, value } = target;

    setUserDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditState = ({ target }) => {
    const { name } = target;
    setIsReadOnly((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <div className='userProfile'>
      <h1>Your Profile</h1>
      <div className='container'>
        <button className='btn__secondary back'>
          <IoMdArrowRoundBack className=' back__btn' />
        </button>
        <form
          action=''
          className='userProfile__img--form'
          title='Click to change picture'
        >
          <div className='userProfile__img--form-upload'>
            <input type='file' />

            <img
              src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt=''
              className='avatar__default'
            />
          </div>
        </form>
        <form action='' className='userProfile__details'>
          {Object.keys(userDetails).map((field) => (
            <ProfileField
              key={field}
              name={field}
              id={field}
              handleFunc={handleFunction}
              value={userDetails[field]}
              isEditable={isReadOnly[field]}
              setIsEditable={handleEditState}
            />
          ))}

          <button className='btn__primary'>Update</button>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
