import AdminNavHorizontral from "../nav/AdminNavHorizontral";
import VerticalNav from "../nav/VerticalNav";
import PropType from "prop-types";

import "./adminlayout.scss";

const AdminLayout = ({ children }) => {
  return (
    <div className='adminLayout'>
      <div className='adminLayout__top'>
        <AdminNavHorizontral />
      </div>
      <div className='adminLayout__bottom'>
        <div className='adminLayout__bottom--sideNav'>
          <VerticalNav />
        </div>
        <div className='adminLayout__bottom--content'>{children}</div>
      </div>
    </div>
  );
};

AdminLayout.propTypes = {
  children: PropType.node,
};

export default AdminLayout;
