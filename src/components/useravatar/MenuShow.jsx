import { Button, Menu, MenuItem } from "@mui/material";
import { useContext, useState } from "react";
import UserAvatar from "./UserAvatar";
import { AuthContext } from "../../utils/AuthProvider";
import { Link } from "react-router-dom";

const MenuShow = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { user, logout } = useContext(AuthContext);
  console.log("User avatar", user);

  return (
    <div>
      <Button
        id='basic-button'
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup='true'
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <UserAvatar
          name={`${user.firstName} ${user.lastName}`}
          img={user.image}
        />
      </Button>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem>
          <Link to='/viewprofile'>Profile</Link>
        </MenuItem>
        <MenuItem onClick={logout}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

export default MenuShow;
