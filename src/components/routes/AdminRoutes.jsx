import { Route, Routes } from "react-router-dom";
import AppService from "../pages/appservice/AppService";
import AddService from "../pages/appservice/AddService";

const AdminRoutes = () => {
  return (
    <div className='adminRoutes'>
      <Routes>
        <Route path='/' />

        <Route path='services' element={<AppService />} />
        <Route path='services/add' element={<AddService />} />
      </Routes>
    </div>
  );
};

export default AdminRoutes;
