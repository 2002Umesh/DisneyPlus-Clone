import { useState } from "react";
import { useNavigate } from "react-router-dom";
import image from "../assets/images/login_img.png";


export const Contact = () => {
  
 
const BACKURL = "https://disney-plus-clone-back.vercel.app";

const LOCALURL = "https://localhost:5000";


  const [contact, setContact] = useState({
    email: localStorage.getItem("email"),
    message: "",
  });
  const navigate = useNavigate();

  // lets tackle our handleInput
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };

  // handle fomr getFormSubmissionInfo
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(contact);
    try {
      const res = await fetch(`${BACKURL}/api/form/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });
      console.log(res);
      if (res.ok) {
        setContact({
          email: "",
          message: "",
        });
        navigate("/");
      }
    } catch (error) {
      console.log("contact", error);
    }
  };

  return (
    <>
      <section className="h-screen">
        <div className="contact-content container">
          <h1 className="main-heading">Contact Us</h1>
        </div>
        {/* contact page main  */}
        <div className="flex  justify-center items-center gap-2">
          {/* contact form content actual  */}
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
                  value={contact.email}
                  onChange={handleInput}
                  required
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="message" className="pr-1 ">
                  message
                </label>
                <textarea
                  className="rounded-sm"
                  name="message"
                  id="message"
                  placeholder="feedback"
                  autoComplete="off"
                  value={contact.message}
                  onChange={handleInput}
                  required
                  cols="30"
                  rows="6"
                ></textarea>
              </div>

              <div>
                <br />
                <button className="bg-teal-700" type="submit">
                  submit
                </button>
              </div>
            </form>
          </section>
          <div className="hidden md:block relative">
            <img
              className="h-[380px] opacity-50"
              src={image}
              alt="we are always ready to help"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
          </div>
        </div>

        <section className="mb-3 mt-1">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2613173278896!2d73.91411937501422!3d18.562253982539413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity%20Pune!5e0!3m2!1sen!2sin!4v1697604225432!5m2!1sen!2sin"
            width="100%"
            height="280"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </section>
    </>
  );
};
