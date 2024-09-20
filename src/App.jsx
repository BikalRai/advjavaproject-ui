import { AuthContext, AuthProvider } from "./utils/AuthProvider";
import UserAppLayout from "./components/layout/UserAppLayout";
import SiteRoutes from "./components/routes/SiteRoutes";
import { useContext, useEffect } from "react";
import AdminLayout from "./components/layout/AdminLayout";
import AdminRoutes from "./components/routes/AdminRoutes";

function App() {
  const { roles, setRoles, loggedInStatus, setIsloggedInStatus } =
    useContext(AuthContext);

  console.log(roles, loggedInStatus);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const savedRoles = localStorage.getItem("userRoles");

    if (token && savedRoles) {
      setIsloggedInStatus(true);
      setRoles(savedRoles);
    }
  }, []);
  return (
    <div className='app'>
      {loggedInStatus && roles?.includes("ROLE_ADMIN") && (
        <AdminLayout>
          <AdminRoutes />
        </AdminLayout>
      )}

      {loggedInStatus && roles?.includes("ROLE_USER") && (
        <UserAppLayout>
          <SiteRoutes />
        </UserAppLayout>
      )}

      {!loggedInStatus && (
        <UserAppLayout>
          <SiteRoutes />
        </UserAppLayout>
      )}
    </div>
  );
}
const AppWrapper = () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};

export default AppWrapper;
