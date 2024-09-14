import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { IoMdArrowRoundBack } from "react-icons/io";
import ProfileField from "../../inputfield/ProfileField";
import "./userprofile.scss";
import { BiSolidImageAdd } from "react-icons/bi";
import { AuthContext } from "../../../utils/AuthProvider";

const UserProfile = () => {
  const [userDetails, setUserDetails] = useState({
    username: "",
    mobile: "",
    team: "",
    email: "",
  });

  const [isReadOnly, setIsReadOnly] = useState({
    username: true,
    mobile: true,
    team: true,
    email: true,
  });

  const [img, setImg] = useState("");
  const [imgBase64, setImgBase64] = useState("");

  const { setUser } = useContext(AuthContext);

  const usernameArr = userDetails.username.split(" ");
  const firstName = usernameArr[0];
  const lastName = usernameArr[1];

  const handleFunction = ({ target }) => {
    const { name, value } = target;

    setUserDetails((prev) => ({ ...prev, [name]: value }));
    target.focus();
  };

  const handleEditState = ({ target }) => {
    const { name } = target;
    setIsReadOnly((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const handleImageUpload = ({ target }) => {
    const file = target.files[0];

    // Create a local URL for immediate display
    setImg(URL.createObjectURL(file));

    // Read the file as ArrayBuffer for sending to the server
    const reader = new FileReader();
    reader.onload = (event) => {
      const base64String = btoa(
        new Uint8Array(event.target.result).reduce(
          (data, byte) => data + String.fromCharCode(byte),
          ""
        )
      );
      // Store the base64 string in a separate state variable
      setImgBase64(base64String);
    };
    reader.readAsArrayBuffer(file);
  };

  const getUserData = async (userId) => {
    try {
      const token = localStorage.getItem("authToken");

      const res = await axios.get(`http://localhost:8080/api/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUserDetails((prev) => ({
        ...prev,
        username: `${res?.data?.firstName} ${res?.data?.lastName}`,
        mobile: res?.data?.mobile || "Enter mobile",
        team: res?.data?.team || "Enter team",
        email: res?.data?.email || "Enter email",
      }));

      // setImg(res?.data?.image);

      if (res?.data?.image) {
        setImg(`data:image/jpeg;base64,${res?.data?.image}`);
        setImgBase64(res.data.image);
      }

      console.log(res?.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.put(`http://localhost:8080/api/updateUser/${1}`, {
        firstName: firstName,
        lastName: lastName,
        mobile: userDetails.mobile,
        team: userDetails.team,
        email: userDetails.email,
        image: imgBase64,
      });

      setUser(userDetails);
      console.log(res);
    } catch (error) {
      console.log(error.message);
    }
  };

  console.log(userDetails);
  console.log(userDetails.email);

  useEffect(() => {
    getUserData(1);
  }, []);

  return (
    <div className='userProfile'>
      <h1>Your Profile</h1>
      <div className='container'>
        <button type='button' className='btn__secondary back'>
          <IoMdArrowRoundBack className=' back__btn' />
        </button>

        <form className='userProfile__details' onSubmit={handleSubmit}>
          <div className='userProfile__details--avatar'>
            <div
              className='userProfile__img--form-upload'
              title='Click to change picture'
            >
              <input type='file' onChange={handleImageUpload} />
              {img ? (
                <img src={img} alt='User avatar' className='avatar__default' />
              ) : (
                <BiSolidImageAdd className='avatar__default--icon' />
              )}
            </div>
          </div>
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
