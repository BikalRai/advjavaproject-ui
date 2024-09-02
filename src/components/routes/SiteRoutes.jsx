import { Route, Routes } from "react-router-dom";
import LoginForm from "../form/LoginForm";
import Register from "../form/Register";
import Hero from "../hero/Hero";

const SiteRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/signup' element={<Register />} />
      </Routes>
    </>
  );
};

export default SiteRoutes;
