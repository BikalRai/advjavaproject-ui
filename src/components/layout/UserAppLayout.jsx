import Navbar from "../nav/Navbar";

import PropType from "prop-types";

const UserAppLayout = ({ children }) => {
  return (
    <div className='user__layout'>
      <div className='nav'>
        <Navbar />
      </div>
      <div className='content'>{children}</div>
      <div className='footer'></div>
    </div>
  );
};

UserAppLayout.propTypes = {
  children: PropType.element,
};

export default UserAppLayout;
