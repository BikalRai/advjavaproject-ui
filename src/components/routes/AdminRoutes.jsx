import { Route, Routes } from "react-router-dom";
import AppService from "../pages/appservice/AppService";
import AddService from "../pages/appservice/AddService";
import AdminVenue from "../pages/venues/AdminVenue";
import AddVenue from "../pages/venues/AddVenue";
import DashBoard from "../pages/home/DashBoard";

const AdminRoutes = () => {
  return (
    <div className='adminRoutes'>
      <Routes>
        <Route path='/' element={<DashBoard />} />

        <Route path='services' element={<AppService />} />
        <Route path='services/add' element={<AddService />} />
        <Route path='venues' element={<AdminVenue />} />
        <Route path='venues/add' element={<AddVenue />} />
      </Routes>
    </div>
  );
};

export default AdminRoutes;
