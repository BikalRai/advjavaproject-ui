import { AuthProvider } from "./utils/AuthProvider";
import UserAppLayout from "./components/layout/UserAppLayout";
import SiteRoutes from "./components/routes/SiteRoutes";

function App() {
  return (
    <div className='app'>
      <UserAppLayout>
        <SiteRoutes />
      </UserAppLayout>
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
