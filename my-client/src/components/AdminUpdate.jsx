import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../mystore/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function AdminUpdate() {

 const BACKURL = "https://disney-plus-clone-back.vercel.app";

 const LOCALURL = "https://localhost:5000";


  const [data, setData] = useState({
    email: "",
    phone: "",
  });
  const params = useParams();
  console.log("param user id : ", params);
  const { authorizationToken } = useAuth();
  const getSingleUserData = async () => {
    try {
      const res = await fetch(
        `${BACKURL}/api/admin/users/${params.id}`,
        {
          method: "GET",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );
      const data = await res.json();
      console.log(`user single data : ${data} `);
      setData(data);
      //  if (res.ok) {
      //    getAllUsersData();
      //  }
    } catch (error) {
      console.log(error);
    }
  };
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setData({
      ...data,
      [name]: value,
    });
  };
  useEffect(() => {
    getSingleUserData();
  }, []);

  //update data
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await fetch(
        `${BACKURL}/api/admin/users/update/${params.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: authorizationToken,
          },
          body: JSON.stringify(data),
        }
      );
      if (resp.ok) {
        console.log(resp);
        toast.success("Updated successfully");
      } else {
        toast.warning("NOT Updated !!!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className="h-screen">
        <div className="contact-content container">
          <h1 className="main-heading">Update User Data</h1>
        </div>

        <div className="flex  justify-center items-center gap-2">
          <section className="section-form">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col">
                <label htmlFor="email" className="pr-1 ">
                  email
                </label>
                <input
                  className="w-[250px] h-[40px] rounded-sm"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="email"
                  autoComplete="off"
                  value={data.email}
                  onChange={handleInput}
                  required
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="phone" className="pr-1 ">
                  mobile
                </label>
                <input
                  className="w-[250px] h-[40px] rounded-sm"
                  type="phone"
                  name="phone"
                  id="phone"
                  placeholder="phone"
                  autoComplete="off"
                  value={data.phone}
                  onChange={handleInput}
                  required
                />
              </div>

              <div>
                <br />
                <button className="bg-teal-700" type="submit">
                  Update
                </button>
              </div>
            </form>
          </section>
        </div>
      </section>
      <ToastContainer />
    </>
  );
}

export default AdminUpdate;
