import { Route, Routes } from "react-router-dom";
import LoginForm from "../form/LoginForm";
import Register from "../form/Register";
import Home from "../pages/home/Home";
import UserVenue from "../pages/venues/UserVenue";
import UserVenueTime from "../pages/venues/UserVenueTime";
import MyBooking from "../pages/booking/MyBooking";
import ViewUser from "../pages/user/ViewUser";
import Forbidden from "../pages/errorPages/Forbidden";

const SiteRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/signup' element={<Register />} />
        <Route path='/venues' element={<UserVenue />} />
        <Route path='/venues/:venueId' element={<UserVenueTime />} />
        <Route path='/mybookings' element={<MyBooking />} />
        <Route path='/viewprofile' element={<ViewUser />} />
        <Route path='/forbidden' element={<Forbidden />} />
      </Routes>
    </>
  );
};

export default SiteRoutes;
