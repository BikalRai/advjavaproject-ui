import { AuthContext, AuthProvider } from "./utils/AuthProvider";
import UserAppLayout from "./components/layout/UserAppLayout";
import SiteRoutes from "./components/routes/SiteRoutes";
import { useCallback, useContext, useEffect } from "react";
import AdminLayout from "./components/layout/AdminLayout";
import AdminRoutes from "./components/routes/AdminRoutes";
import { LoadingContext, LoadingProvider } from "./utils/LoadingProvider";
import { PacmanLoader } from "react-spinners";

function App() {
  const { roles, setRoles, loggedInStatus, setIsloggedInStatus } =
    useContext(AuthContext);
  // const [appLoading, setAppLoading] = useState(true);

  const { loading, setLoading } = useContext(LoadingContext);

  console.log(roles, loggedInStatus);

  const initializeAuth = useCallback(() => {
    setLoading(true);
    const token = localStorage.getItem("authToken");
    const savedRoles = localStorage.getItem("userRoles");

    if (token && savedRoles) {
      setIsloggedInStatus(true);
      setRoles(savedRoles);
    }

    setLoading(false);
  }, [setIsloggedInStatus, setRoles]);

  useEffect(() => {
    initializeAuth();
  }, [initializeAuth]);

  if (loading) {
    return (
      <PacmanLoader
        color='#fff'
        cssOverride={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
        size={40}
      />
    );
  }

  if (loggedInStatus && roles?.includes("ROLE_ADMIN")) {
    return (
      <AdminLayout>
        <AdminRoutes />
      </AdminLayout>
    );
  }

  return (
    <UserAppLayout>
      <SiteRoutes />
    </UserAppLayout>
  );
}

const AppWrapper = () => {
  return (
    <AuthProvider>
      <LoadingProvider>
        <App />
      </LoadingProvider>
    </AuthProvider>
  );
};

export default AppWrapper;
