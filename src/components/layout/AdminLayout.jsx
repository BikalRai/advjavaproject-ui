import AdminNavHorizontral from "../nav/AdminNavHorizontral";
import VerticalNav from "../nav/VerticalNav";
import AppService from "../pages/appservice/AppService";
import PropType from "prop-types";

import "./adminlayout.scss";
import AddService from "../pages/appservice/AddService";

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
        <div className='adminLayout__bottom--content'>
          {/* <AppService /> */}
          <AddService />
        </div>
      </div>
    </div>
  );
};

AdminLayout.propTypes = {
  children: PropType.element,
};

export default AdminLayout;
