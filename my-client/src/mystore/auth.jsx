import React, { useState, useEffect, createContext, useContext } from "react";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState([]);
  
  const navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setToken(res.id);
          setProfile(res.data);
          console.log(profile);
          // storeTokenInLSt(res.id);
          storeTokenInLS(profile.id);
          navigate("/");
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  // log out function to log the user out of google and set the profile array to null
  const logOut = () => {
    setToken("");
    googleLogout();
    setProfile(null);
    // localStorage.removeItem("tokens");
    localStorage.removeItem("token");
    
  };

  const [token, setToken] = useState(localStorage.getItem("token"));
  const [tokens, setTokens] = useState(localStorage.getItem("tokens"));

  const storeTokenInLS = (serverToken) => {
    setToken(serverToken);
    return localStorage.setItem("token", serverToken);
  };
  let isLoggedIn = !!token;
  console.log("isLoggedIn", isLoggedIn);

  const storeTokenInLSt = (serverTokens) => {
    setTokens(serverTokens);
    return localStorage.setItem("tokens", serverTokens);
  };

  let isRegister = !!tokens;
  console.log("isRegister", isRegister);

  //logout
  const LogoutUser = () => {
    setToken("");
    localStorage.removeItem("token");
    // toast.success("logged out successfully");
  };
  //delete user
  const currentEmail = (e) => {
    localStorage.setItem("email", e);
  };

  const DeleteUser = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/auth/register`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: localStorage.getItem("email") }),
      });

      const data = await response.json();
      console.log("from delete method", data);

      if (response.ok) {
        setTokens("");
        setToken("");
        localStorage.removeItem("tokens");
        localStorage.removeItem("token");
        localStorage.removeItem("email");
        // toast.success("account removed successfully");
      }
    } catch (error) {
      console.log("delete", error);
    }
  };

  return (
    <>
      <AuthContext.Provider
        value={{
          isLoggedIn,
          isRegister,
          storeTokenInLS,
          storeTokenInLSt,
          LogoutUser,
          currentEmail,
          DeleteUser,
          login,
          logOut,
        }}
      >
        <ToastContainer />
        {children}
      </AuthContext.Provider>
    </>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of the Provider");
  }
  return authContextValue;
};
