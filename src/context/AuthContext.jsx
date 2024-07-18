import React, { useState, useEffect, useCallback, useMemo } from "react";

let logoutTimer;

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  user: {
    fullName: "",
    email: "",
    access: "",
    regForm: [],
  },
  login: async () => {},
  logout: () => {},
  update: () => {},
});

const calculateRemainingTime = (expirationTime) => {
  const currentTime = new Date().getTime();
  const remainingDuration = expirationTime - currentTime;
  return remainingDuration;
};

const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem("token");
  const storedUser = localStorage.getItem("user");
  const storedExpirationDate = localStorage.getItem("expirationTime");

  const remainingTime = calculateRemainingTime(storedExpirationDate);

  if (remainingTime <= 3600) {
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    localStorage.removeItem("user");
    return null;
  }

  return {
    token: storedToken,
    duration: remainingTime,
    user: JSON.parse(storedUser),
  };
};

export const AuthContextProvider = (props) => {
  const tokenData = retrieveStoredToken();
  let initialToken = tokenData?.token || null;
  let initialUser = tokenData?.user || {};
  let loggedIn = !!tokenData;

  const [token, setToken] = useState(initialToken);
  const [user, setUser] = useState(initialUser);
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(loggedIn);

  const logoutHandler = useCallback(() => {
    console.log("Logging out...");
    setToken(null);
    setUser({});
    setUserIsLoggedIn(false);
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    localStorage.removeItem("user");

    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
    console.log("Logout complete. isLoggedIn:", userIsLoggedIn);
  }, []);

  const loginHandler = (fullName, email, access, token, expirationTime) => {
    localStorage.setItem("token", token);
    const setuserdata = {
      fullName: fullName,
      email: email,
      access: access,
    };
    localStorage.setItem("user", JSON.stringify(setuserdata));

    const nowTime = new Date().getTime();
    const expTime = nowTime + expirationTime;
    localStorage.setItem("expirationTime", expTime);

    logoutTimer = setTimeout(logoutHandler, expirationTime);
    setUser(setuserdata);
    setToken(token);
    setUserIsLoggedIn(true);
  };

  useEffect(() => {
    if (tokenData && !userIsLoggedIn) {
      setToken(tokenData.token);
      setUser(tokenData.user);
      setUserIsLoggedIn(true);
      logoutTimer = setTimeout(logoutHandler, tokenData.duration);
    }
    return () => {
      if (logoutTimer) {
        clearTimeout(logoutTimer);
      }
    };
  }, [tokenData, logoutHandler, userIsLoggedIn]);

  useEffect(() => {
    console.log("Auth context state updated", { token, user, userIsLoggedIn });
  }, [token, user, userIsLoggedIn]);

  const contextValue = useMemo(
    () => ({
      token: token,
      isLoggedIn: userIsLoggedIn,
      user,
      login: loginHandler,
      logout: logoutHandler,
    }),
    [token, userIsLoggedIn, user, loginHandler, logoutHandler]
  );

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
