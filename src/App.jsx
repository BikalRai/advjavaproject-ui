import { AuthContext, AuthProvider } from "./utils/AuthProvider";
import UserAppLayout from "./components/layout/UserAppLayout";
import SiteRoutes from "./components/routes/SiteRoutes";
import { useContext } from "react";
import AdminLayout from "./components/layout/AdminLayout";
import AdminRoutes from "./components/routes/AdminRoutes";

function App() {
  const { roles, loggedInStatus, email, user } = useContext(AuthContext);

  console.log(roles, loggedInStatus, email);
  console.log(user);
  return (
    <div className='app'>
      {!loggedInStatus ? (
        <UserAppLayout>
          <SiteRoutes />
        </UserAppLayout>
      ) : roles.includes("ROLE_USER") ? (
        <UserAppLayout>
          <SiteRoutes />
        </UserAppLayout>
      ) : (
        <AdminLayout>
          <AdminRoutes />
        </AdminLayout>
      )}

      {/* <UserProfile /> */}
      {/* <AdminNavHorizontral /> */}
      {/* <VerticalNav /> */}
      {/* <AdminLayout /> */}
      {/* <Register /> */}
      {/* <LoginForm /> */}
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
