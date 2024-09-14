import { createContext, useState } from "react";
import PropType from "prop-types";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loggedInStatus, setIsloggedInStatus] = useState(false);
  const [token, setToken] = useState("");
  const [roles, setRoles] = useState([]);
  const [user, setUser] = useState({});

  const logout = () => {
    const token = localStorage.getItem("authToken");

    if (token) {
      localStorage.removeItem("authToken");
      localStorage.removeItem("userRoles");
      setIsloggedInStatus(false);
      setRoles([]);
      setUser({});
      setToken("");
    }
  };
  return (
    <AuthContext.Provider
      value={{
        loggedInStatus,
        setIsloggedInStatus,
        logout,
        token,
        setToken,
        roles,
        setRoles,
        user,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropType.element,
};

export { AuthProvider, AuthContext };
