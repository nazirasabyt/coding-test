import React, { useState, useReducer } from "react";

const initialContext = {
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: () => {},
};

const AuthContext = React.createContext(initialContext);

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };
  const logoinHandler = () => {
    setIsLoggedIn(true);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: logoinHandler,
      }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
