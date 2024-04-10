import React, { useState } from "react";
import { GiCrossedAxes } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/disney_logo.png";
import { RxCross1 } from "react-icons/rx";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { HiChevronRight } from "react-icons/hi2";
import image from "../assets/images/login_img.png";
import axios from "axios";

function Subscribtion() {
  // const amount =Number(149);

  const checkouthandler = async (amount) => {
    const {
      data: { key },
    } = await axios.get("http://localhost:5000/api/payment/getkey");
    const {
      data: { order },
    } = await axios.post("http://localhost:5000/api/payment/checkout", {
      amount,
    });
    console.log(window);
    const options = {
      key,
      amount: order.amount,
      currency: "INR",
      name: "Cruiz",
      description: "Razorpay gateway",
      image:
        "https://img.freepik.com/premium-vector/concept-online-commercemobile-app-payment-with-credit-card-web-banking-customer_183665-376.jpg",
      order_id: order.id,
      callback_url: "http://localhost:5000/api/payment/verification",
      prefill: {
        name: "Cruiz",
        email: "cruiz2002@gmail.com",
        contact: "1234567890",
      },
      notes: {
        address: "payment gateway",
      },
      theme: {
        color: "#3399cc",
      },
    };
    const razor = new window.Razorpay(options);
    razor.open();
  };

  const [plan, setPlan] = useState([
    {
      mobile: "red",
      super: "black",
      premium: "black",
    },
    {
      myplan: "Mobile",
      amount: Number(149),
    },
  ]);
  console.log(plan[0].mobile);

  return (
    <>
      <div className=" ">
        <div className="p-3 pl-8 flex  gap-10 sticky top-0 z-50 bg-black border-b">
          <NavLink to="/">
            <GiCrossedAxes size={30} className="mt-6 cursor-pointer" />
          </NavLink>
          <img
            src="https://img.hotstar.com/image/upload/v1656431456/web-images/logo-d-plus.svg"
            className="h-[70px] "
          />
        </div>
        <div className="md:grid grid-cols-3 p-8">
          <div
            className="hidden md:block w-5/6 "
            style={{
              backgroundImage: `linear-gradient(to left,rgba(0,0,0,1),rgba(0,0,0,0.5)),linear-gradient(to bottom,rgba(0,0,0,.8),rgba(0,0,0,0.5)),url(${image})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <h1>Subscribe now and start streaming</h1>
            {plan[0].mobile == "red" && (
              <h3 className=" mt-2 text-red-500">
                You will be able to watch only on Mobile app
              </h3>
            )}
          </div>

          <div className="hidden md:block w-3/4 mt-10 ">
            <h2 className=" font-semibold">All content</h2>
            <h3 className="pb-7 text-xs">Movies,Live sports,TV,Specials</h3>
            <h2 className="pb-7 font-semibold">Watch on TV or Laptop</h2>
            <h2 className="pb-7 font-semibold">
              Ads free movies and shows (except sports)
            </h2>
            <h2 className="pb-7 font-semibold">
              Number of devices that can be logged in
            </h2>
            <h2 className="pb-7 font-semibold">Max video quality</h2>
            <h2 className=" font-semibold">Max audio quality</h2>
            <h3 className="text-xs">Atoms available on select titles only</h3>
          </div>

          <div className="">
            <div className="hidden md:grid grid-cols-3 ">
              <div
                className=" rounded-md"
                style={{ backgroundColor: plan[0].mobile }}
              >
                <h2 className="text-center font-semibold">Mobile</h2>
                <div className="flex justify-center pt-5">
                  <IoCheckmarkDoneSharp size={25} />
                </div>
                <div className="flex justify-center pt-7">
                  <RxCross1 size={25} />
                </div>

                <div className="flex justify-center pt-7">
                  <RxCross1 size={25} />
                </div>
                <h2 className="text-center pt-7">1</h2>
                <h2 className="font-thin text-center pt-7">HD 720p</h2>
                <h2 className="font-thin text-center pt-7">Stereo</h2>
              </div>
              <div
                className=" rounded-md"
                style={{ backgroundColor: plan[0].super }}
              >
                <h2 className="text-center font-semibold">Super</h2>

                <div className="flex justify-center  pt-5">
                  <IoCheckmarkDoneSharp size={25} />
                </div>

                <div className="flex justify-center pt-7">
                  <IoCheckmarkDoneSharp size={25} />
                </div>
                <div className="flex justify-center pt-7">
                  <RxCross1 size={25} />
                </div>
                <h2 className="text-center pt-7">2</h2>
                <h2 className="font-thin text-center pt-7">Full HD 1080p</h2>
                <h2 className="font-thin text-center pt-7">Dolby Atoms</h2>
              </div>
              <div
                className=" rounded-md"
                style={{ backgroundColor: plan[0].premium }}
              >
                <h2 className="text-center font-semibold">Premium</h2>
                <div className="flex justify-center pt-5">
                  <IoCheckmarkDoneSharp size={25} />
                </div>
                <div className="flex justify-center pt-7">
                  <IoCheckmarkDoneSharp size={25} />
                </div>
                <div className="flex justify-center pt-7">
                  <IoCheckmarkDoneSharp size={25} />
                </div>
                <h2 className="text-center pt-7">4</h2>
                <h2 className="font-thin text-center pt-7">4K 2160p</h2>
                <h2 className="font-thin text-center pt-7">Dolby Atoms</h2>
              </div>
            </div>

            <div className="">
              <div className="mt-10 md:flex gap-5 overflow-x-auto ">
                <div>
                  <button
                    className="h-[80px] w-[150px]"
                    onClick={() =>
                      setPlan([
                        {
                          mobile: "red",
                          super: "black",
                          premium: "black",
                        },
                        {
                          myplan: "Mobile",
                          amount: Number(299),
                        },
                      ])
                    }
                  >
                    Mobile
                    <br />
                    ₹149
                  </button>
                </div>
                <div>
                  <button
                    className="h-[80px] w-[150px]"
                    onClick={() =>
                      setPlan([
                        {
                          mobile: "black",
                          super: "red",
                          premium: "black",
                        },
                        {
                          myplan: "Super",
                        },
                      ])
                    }
                  >
                    Super
                    <br />
                    ₹299
                  </button>
                </div>
                <div>
                  <button
                    className="h-[80px] w-[150px]"
                    onClick={() => {
                      setPlan([
                        {
                          mobile: "black",
                          super: "black",
                          premium: "red",
                        },
                        {
                          myplan: "Premium",
                          amount: Number(499),
                        },
                      ]);
                    }}
                  >
                    Premium
                    <br />
                    ₹499
                  </button>
                </div>
              </div>
              <div className="pt-5 overflow-x-auto">
                <button
                  className="h-[60px] md:w-[485px] bg-blue-600 flex justify-center items-center "
                  onClick={() => checkouthandler(plan[1].amount)}
                >
                  Continue with {plan[1].myplan} <HiChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Subscribtion;
