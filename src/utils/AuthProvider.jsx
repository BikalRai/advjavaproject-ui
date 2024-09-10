import { createContext, useState } from "react";
import PropType from "prop-types";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loggedInStatus, setIsloggedInStatus] = useState(false);

  const login = () => {
    const token = localStorage.getItem("authToken");

    if (token) {
      setIsloggedInStatus(true);
    }
  };

  const logout = () => {
    const token = localStorage.getItem("authToken");

    if (token) {
      localStorage.removeItem("authToken");
      setIsloggedInStatus(false);
    }
  };
  return (
    <AuthContext.Provider
      value={{ loggedInStatus, setIsloggedInStatus, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropType.element,
};

export { AuthProvider, AuthContext };
