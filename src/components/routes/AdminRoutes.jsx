import { Route, Routes } from "react-router-dom";
import AppService from "../pages/appservice/AppService";
import AddService from "../pages/appservice/AddService";
import AdminVenue from "../pages/venues/AdminVenue";
import AddVenue from "../pages/venues/AddVenue";

const AdminRoutes = () => {
  return (
    <div className='adminRoutes'>
      <Routes>
        <Route path='/' />

        <Route path='services' element={<AppService />} />
        <Route path='services/add' element={<AddService />} />
        <Route path='venues' element={<AdminVenue />} />
        <Route path='venues/add' element={<AddVenue />} />
      </Routes>
    </div>
  );
};

export default AdminRoutes;
