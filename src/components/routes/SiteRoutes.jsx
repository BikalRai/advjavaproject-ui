import { Route, Routes } from "react-router-dom";
import LoginForm from "../form/LoginForm";
import Register from "../form/Register";

const SiteRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<LoginForm />} />
        <Route path='/signup' element={<Register />} />
      </Routes>
    </>
  );
};

export default SiteRoutes;
