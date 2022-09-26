import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import AuthService from "../services/AuthService";
import createChannel from "../utils/createChannel";
import alertNotification from "../utils/alertNotification";
const AuthContext = createContext();

// create a new axios instance
const channel = createChannel();

// create the context provider
export const AuthProvider = ({ children }) => {
  const router = useRouter();
  // create a new user service instance
  const authService = new AuthService(channel.request);

  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loginLoading, setLoginLoading] = useState(false);
  const [registerLoading, setRegisterLoading] = useState(false);

  // register user
  const register = (values) => {
    setRegisterLoading(true);
    authService
      .registerUser(values)
      .then((res) => {
        router.push("/register-success");
      })
      .catch((err) => {
        alertNotification("error", err.response && err.response.data.message);
      })
      .finally(() => {
        setRegisterLoading(false);
      });
  };

  // login user
  const login = (values, redirectPage) => {
    setLoginLoading(true);
    authService
      .loginUser(values)
      .then((res) => {
        checkAuthStatus();
        // check login location, return if from order summary w/o redirect
        if (router.pathname.includes("order-summary")) return;
        // setTimeout(() => {
        //   router.push(redirectPage ? redirectPage : "/");
        // }, 250);
      })
      .catch((err) => {
        // console.log(err)
        // setError(err.response.data.message);
        alertNotification("error", err);
      })
      .finally(() => {
        setLoginLoading(false);
      });
  };

  // logout user
  const logout = () => {
    authService
      .logoutUser()
      .then((res) => {
        setUser(null);
        router.push("/");
      })
      .catch((err) => {
        setError(err.response.data.message);
      });
  };

  // check if user is logged in
  const checkAuthStatus = () => {
    setIsLoading(true);
    authService
      .checkUserAuth()
      .then((res) => {
        setUser(res.data.data);
      })
      .catch((err) => {
        setUser(null);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    checkAuthStatus();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        error,
        isLoading,
        register,
        login,
        logout,
        checkAuthStatus,
        loginLoading,
        setUser,
        registerLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
