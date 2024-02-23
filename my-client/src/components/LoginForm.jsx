import React, { useEffect } from "react";
import formImg from "../assets/images/login_img.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../mystore/auth";
import { GoogleLogin } from "@react-oauth/google";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function LoginForm() {
  const responseMessage = (response) => {
    storeTokenInLSt(response.credential);
    storeTokenInLS(response.credential);
    console.log(response.credential);
    navigate("/");
  };
  const errorMessage = (error) => {
    console.log(error);
  };

  const { storeTokenInLS, storeTokenInLSt, isRegister, currentEmail, login } =
    useAuth();

  //SignUp
  const [user, setUser] = useState({
    email: "",
    phone: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  // handle form on submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("registered email", user.email);

    try {
      const response = await fetch(
        "https://disney-plus-clone-weld-nine.vercel.app/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
          mode:"cors",
        }
      );

      if (response.ok) {
        currentEmail(user.email);
        const res_data = await response.json();
        console.log("res from server", res_data);
        //store the token in localhost
        storeTokenInLSt(res_data.token);
        storeTokenInLS(res_data.token);
        // localStorage.setItem("token", res_data.token);
        setUser({
          email: "",
          phone: "",
          password: "",
        });
        navigate("/");
        toast.success("SignUp successful");

        // Navigate to a new location
        // window.location.href = "/";

        // After the navigation is complete, show the success message using toast
        // window.onload = function () {
        //   toast.success("Logged in successfully");
        // };
        // window.onload = function () {
        //   Toastify({
        //     text: "Logged in successfully",
        //     duration: 3000, // 3 seconds
        //     gravity: "top", // show toast at the top of the page
        //     position: "right", // show toast on the right side
        //   }).showToast();
        // };
      }
      console.log(response);
    } catch (error) {
      console.log("register", error);
    }
  };

  //LogIn
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  const handleIn = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setUserLogin({
      ...userLogin,
      [name]: value,
    });
  };

  // handle form on submit
  const handleSub = async (e) => {
    e.preventDefault();
    console.log(userLogin);

    try {
      const response = await fetch(
        "https://disney-plus-clone-weld-nine.vercel.app/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userLogin),
          mode:"cors",
        }
      );
      if (response.ok) {
        const resp_data = await response.json();
        console.log("res from server", resp_data);
        //store the token in localhost
        storeTokenInLS(resp_data.token);
        // localStorage.setItem("token", res_data.token);
        setUserLogin({
          email: "",
          password: "",
        });
        // navigate("/",);
        // toast.success("loggedin successfully");
        // Navigate to a new location
        window.location.href = "/";

        // After the navigation is complete, show the success message using toast
        window.onload = function () {
          toast.success("Logged in successfully");
        };
      }
      console.log(response);
    } catch (error) {
      console.log("login", error);
    }
  };
  return (
    <>
      <div className="flex h-screen  justify-center items-center gap-2">
        <div className="relative">
          <img
            className="h-[430px] opacity-50"
            src={formImg}
            alt="Stay Healthy"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-black to-transparent"></div>
        </div>
        <div className="">
          {!isRegister ? (
            <section>
              <main>
                <div className="section-registration">
                  {/* our main registration code  */}
                  <div className="">
                    <marquee className=" mb-3 text-xl">
                      Login or Sign Up to continue
                    </marquee>
                    <br />
                    <form onSubmit={handleSubmit}>
                      <div className="flex flex-col">
                        <label htmlFor="email" className="pr-1 ">
                          email
                        </label>
                        <input
                          className="w-[250px] h-[40px] rounded-sm"
                          type="email"
                          name="email"
                          value={user.email}
                          onChange={handleInput}
                          placeholder="email"
                          required
                        />
                      </div>
                      <div className="flex flex-col">
                        <label htmlFor="phone" className="pr-1">
                          phone
                        </label>
                        <input
                          className="w-[250px] h-[40px] rounded-sm"
                          type="number"
                          name="phone"
                          value={user.phone}
                          onChange={handleInput}
                          placeholder="phone"
                          required
                        />
                      </div>
                      <div className="flex flex-col ">
                        <label htmlFor="password" className="pr-1">
                          password
                        </label>
                        <input
                          className="w-[250px] h-[40px] rounded-sm"
                          type="password"
                          name="password"
                          value={user.password}
                          onChange={handleInput}
                          placeholder="password"
                          required
                        />
                      </div>
                      <br />
                      <button type="submit" className="bg-teal-700">
                        Sign Up
                      </button>
                      <br />
                      <br />
                      <div className="rounded-md">
                        <button
                          className="bg-slate-50 text-black"
                          onClick={login}
                        >
                          <img
                            className="inline"
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAqFBMVEVHcEz7+/v+/v709PX////7+/v09fX4+Pj////8/Pz7+/v////z+PP29vf09PX////+/v7///////////83qlfrQzPsTkFHiPUlpkszf/RAhfX6uwD8wBLW4vyQs/j96N3/+vPh8eR8wJiHrfjylpBhuXftX0rR6Nb608j0qKNwofBKsGWzy/rzn5n0o57uc2/94J78zFb3u7es1rC6z/rHuTCVsC08ooagt3gtAAAAE3RSTlMA08Eb4kVwOqb5kV7jkn8NfnFw9v5R3wAAAVtJREFUOI2dU9lywjAMTIAchgmljU3sJBRycRZoocf//1ltyZ4cpi/dl0jeHWllxY7TxVPgecGT8weCkMQAEgaP6EncwcSShPEAYZ+fDHlZ5BG/P9T1YW8rRnhyYRoXzEeGn0G6XrKlBmNrOJppAVZnmpNftt1gDeSfVbhhwNa3W83Y1hh9aR1eFX/G43N/kjEYyCR/sGcdG4vvWb692jzYnKrgI88znL96RVQrlU3NJWdSgM5FihBv5sKHggSR9gW5FKx1BSGUSHwawQI8ZHl2B8FK4ZgmAjwspMDDKb4obc2nsgIEnrnpzTeltDF8lSbpsb1r2OWdS8Vpp8KiVAWgA+4TesSNFFBOm+bE+U8iqraD47gqJidVQ4NjA1eve4ydS6PgvGw3AfAxL0oOKAvM/fafi4z/YrcrTBx1/9q5vcj54N2QPk3sx+V3JMS3aKgSuUTCjR49zf/jF+G2OgtU1MugAAAAAElFTkSuQmCC"
                          />{" "}
                          SignIn with Google
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </main>
            </section>
          ) : (
            <section>
              <main>
                <div className="section-login">
                  {/* our main registration code  */}
                  <div className="">
                    <marquee className=" mb-3 text-xl">
                      Login or Sign Up to continue
                    </marquee>
                    <br />
                    <form onSubmit={handleSub}>
                      <div className="flex flex-col">
                        <label htmlFor="email" className="pr-1 ">
                          email
                        </label>
                        <input
                          className="w-[250px] h-[40px] rounded-sm"
                          type="email"
                          name="email"
                          value={userLogin.email}
                          onChange={handleIn}
                          placeholder="email"
                          required
                        />
                      </div>

                      <div className="flex flex-col ">
                        <label htmlFor="password" className="pr-1">
                          password
                        </label>
                        <input
                          className="w-[250px] h-[40px] rounded-sm"
                          type="password"
                          name="password"
                          value={userLogin.password}
                          onChange={handleIn}
                          placeholder="password"
                          required
                        />
                      </div>
                      <br />
                      <button type="submit" className="bg-teal-700">
                        Login
                      </button>
                      <br />
                      <br />
                      <div className="rounded-md">
                        <GoogleLogin
                          onSuccess={responseMessage}
                          onError={errorMessage}
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </main>
            </section>
          )}
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default LoginForm;
