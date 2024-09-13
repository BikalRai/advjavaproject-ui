import { Avatar } from "@mui/material";
import PropType from "prop-types";

const UserAvatar = ({ name, img }) => {
  return (
    <Avatar
      alt={name || "User Avatar"}
      src={`data:image/jpeg;base64,${img}`}
      className='user__avatar'
    />
  );
};

UserAvatar.propTypes = {
  name: PropType.string,
  img: PropType.string,
};

export default UserAvatar;
