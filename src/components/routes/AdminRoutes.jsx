import { Route, Routes } from "react-router-dom";
import AppService from "../pages/appservice/AppService";
import AddService from "../pages/appservice/AddService";
import AdminVenue from "../pages/venues/AdminVenue";
import AddVenue from "../pages/venues/AddVenue";
import DashBoard from "../pages/home/DashBoard";
import AdminUsers from "../pages/admin/AdminUsers";
import AdminUseradd from "../pages/admin/AdminUseradd";
import AdminUsersEdit from "../pages/admin/AdminUsersEdit";
import AdminBooking from "../pages/booking/AdminBooking";

const AdminRoutes = () => {
  return (
    <div className='adminRoutes'>
      <Routes>
        <Route path='/' element={<DashBoard />} />
        <Route path='/bookings' element={<AdminBooking />} />
        <Route path='services' element={<AppService />} />
        <Route path='services/add' element={<AddService />} />
        <Route path='venues' element={<AdminVenue />} />
        <Route path='venues/add' element={<AddVenue />} />
        <Route path='users' element={<AdminUsers />} />
        <Route path='users/add' element={<AdminUseradd />} />
        <Route path='users/edit/:id' element={<AdminUsersEdit />} />
      </Routes>
    </div>
  );
};

export default AdminRoutes;
