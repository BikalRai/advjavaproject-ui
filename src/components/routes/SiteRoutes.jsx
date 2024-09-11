import { Route, Routes } from "react-router-dom";
import LoginForm from "../form/LoginForm";
import Register from "../form/Register";
import Home from "../pages/home/Home";
import UserVenue from "../pages/venues/UserVenue";

const SiteRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/signup' element={<Register />} />
        <Route path='/venues' element={<UserVenue />} />
      </Routes>
    </>
  );
};

export default SiteRoutes;
