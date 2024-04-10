// import React from "react";
// import { useAuth0 } from "@auth0/auth0-react";
// import Header from "./Header";
// import Footer from "./Footer";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import MyWatchlist from "./MyWatchlist";

// function Login() {
//   const { loginWithRedirect, isAuthenticated, isLoading, logout } = useAuth0();

//   if (isLoading) {
//     return <div>Loading ...</div>;
//   }

//   return (
//     <>
//       <div className="flex">
//         <div className=" hidden md:block">
//           <Header />
//         </div>
//         <div className="w-full pl-2 h-screen md:h-full">
//           <div className="flex justify-end pr-3 pt-5 pb-1">
//             <a href="https://en.wikipedia.org/wiki/Disney%2B_Hotstar">
//               <button className="">Help & Support</button>
//             </a>
//           </div>
//           <div className=" text-center ">
//             <img
//               className="mx-auto"
//               src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/feature/myspace/my_space_login_in.png"
//             />
//             <h1 className=" pb-3">Login to Disney+ Hotstar</h1>
//             <h3 className="hidden md:block pb-3">
//               Start watching from where you left off,personalise for kids and
//               more
//             </h3>
//             {isAuthenticated ? (
//               <button
//                 onClick={() =>
//                   toast("logged out successfully") &&
//                   logout({ logoutParams: { returnTo: window.location.origin } })
//                 }
//               >
//                 Log Out
//               </button>
//             ) : (
//               <button
//                 className="w-[150px] md:w-[250px]"
//                 onClick={() => loginWithRedirect()}
//               >
//                 Log In
//               </button>
//             )}
//           </div>
//           <MyWatchlist />
//           <div className="pt-[100px] md:pt-[190px]">
//             <Footer />
//           </div>
//         </div>
//       </div>
//       <ToastContainer />
//     </>
//   );
// }

// export default Login;

import Header from "./Header";
import Footer from "./Footer";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MyWatchlist from "./MyWatchlist";
import { NavLink } from "react-router-dom";
import { useAuth } from "../mystore/auth";
import { useState } from "react";
import { BsCaretLeftSquareFill } from "react-icons/bs";
function Login() {
  // log out function to log the user out of google and set the profile array to null
  // const logOut = () => {
  //   localStorage.removeItem("tokens");
  //   localStorage.removeItem("token");
  //   console.log("logged out successfully");
  //   googleLogout();
  // };

  const { isLoggedIn, isRegister, LogoutUser, DeleteUser, logOut } = useAuth();
 const [open,setOpen] = useState(false)
  return (
    <>
      <div className="flex relative">
        <div className=" hidden md:block">
          <Header />
        </div>
        <div className="w-full pl-2 h-screen md:h-full">
          <div className="hidden md:flex justify-evenly pr-3 pt-5 pb-1 gap-1">
            {/* <a href="https://en.wikipedia.org/wiki/Disney%2B_Hotstar">
              <button className="">Help & Support</button>
            </a> */}
            <div className="right-2 absolute flex">
              {open && (
                <ul className=" ">
                  <li>
                    {isLoggedIn ? (
                      <div className="flex flex-col gap-1 mb-1">
                        <NavLink to="/Paywall">
                          <button
                            // className="h-[35px] flex place-items-center "
                            // style={{ backgroundColor: "#FFCC751A", color: "#ffe490", }}
                            className="sub-button"
                          >
                            subscribe
                          </button>
                        </NavLink>
                        <NavLink to="/contact">
                          <button className="bg-transparent border-red-100 rounded-3xl">
                            Help & Support
                          </button>
                        </NavLink>
                      </div>
                    ) : (
                      <div className="flex flex-col ">
                        <button
                          onClick={() => toast.warning("Please login")}
                          // className="h-[35px] flex place-items-center "
                          // style={{ backgroundColor: "#FFCC751A", color: "#ffe490" }}
                          className="sub-button"
                        >
                          subscribe
                        </button>
                        <button
                          className="bg-transparent border-red-100 rounded-3xl"
                          onClick={() => toast.warning("Please login")}
                        >
                          Help & Support
                        </button>
                      </div>
                    )}
                  </li>

                  <li>
                    {isRegister && (
                      <button
                        className="w-[150px] md:w-[150px] md:h-[45px] bg-transparent border-red-100 rounded-3xl"
                        onClick={DeleteUser}
                      >
                        Delete
                      </button>
                    )}
                  </li>
                </ul>
              )}
              <BsCaretLeftSquareFill size={27} onClick={() => setOpen(!open)} />
              {/* <button className="h-10"></button> */}
            </div>
          </div>
          <div className=" text-center ">
            <img
              className="mx-auto"
              src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/feature/myspace/my_space_login_in.png"
            />
            <h1 className="text-xl md:text-3xl pb-3">
              Login to Disney+ Hotstar
            </h1>
            <h3 className="hidden md:block pb-3">
              Start watching from where you left off,personalise for kids and
              more
            </h3>

            {/* <button>Log Out</button> */}
            {!isLoggedIn ? (
              <NavLink to="/Loginform">
                <button className="w-[150px] md:w-[250px]">Log In</button>
              </NavLink>
            ) : (
              <>
                <button
                  className="w-[150px] md:w-[250px]"
                  onClick={() => {
                    logOut();
                    LogoutUser();
                  }}
                >
                  Logout
                </button>
              </>
            )}
          </div>
          <MyWatchlist />
          <div className="pt-[100px] md:pt-[190px] mr-3 md:mr-0">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
