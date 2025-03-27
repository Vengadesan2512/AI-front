import React, { useContext } from "react";
import { assestsImg, plans } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const ByCredit = () => {
  const { user, backendUrl, loadCreditssData, token, setShowLogin } =

  useContext(AppContext);
  const navigate = useNavigate();
  const initPay = async (order) => {
    const options = {
      key: 'rzp_test_1cCIaoUXAh2Ln0',
      amount: order.amount,
      currency: order.currency,
      name: "Credits Payment",
      description: "Credits Paymnet",
      order_id: order.id,
      receipt: order.receipt,
      handler: async (response) => {
       try {
        const {data}=await axios.post(backendUrl+'/api/user/verify-razor',response,{headers:{token}})
        if(data.success){
          loadCreditssData()
          navigate('/')
          toast.success('Credit Added')
        }
       } catch (error) {
        toast.error(error.message)
       }
      },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };
   
  const paymentRazorpay = async (planId) => {
    try {
      if (!user) {
        setShowLogin(true);
      }
      const { data } = await axios.post(
        backendUrl + "/api/user/payrazor",
        { planId },
        { headers: { token } }
      );
      if (data.success) {
            initPay(data.order);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div className="min-h-[80vh] text-center pt-14 mb-10">
      <button className="border border-gray-400 px-10 py-2 rounded-full mb-6 hover:bg-white cursor-pointer ransition-all duration-500">
        Our Subcriptions
      </button>
      <h1 className="text-center text-3xl font-medium mb-6 sm:mb-10">
        Choose the Subcription
      </h1>
      {/* subcription cards */}
      <div className="flex flex-wrap justify-center gap-6 text-left">
        {plans.map((item, index) => (
          <div
            className="bg-white drop-shadow-sm border rounded-lg border-none py-12 px-8 text-gray-600 shadow-[5px_5px_10px_#828282] hover:scale-105 transition-all duration-500 cursor-pointer"
            key={index}
          >
            <img width={50} src={assestsImg.logo} alt="" />
            <p className="mt-3 mb-1 font-semibold">{item.id}</p>
            <p className="text-sm">{item.desc}</p>
            <p className="mt-6">
              <span className="text-3xl font-medium">₹{item.price}</span>/{" "}
              {item.credits} credits
            </p>
            <button
              onClick={() => paymentRazorpay(item.id)}
              className="w-full flex justify-center gap-2 border border-gray-400 mt-2 text-sm rounded-md py-2.5 min-w-52 hover:bg-blue-50 hover:bg-blue-400 hover:text-white transition-all duration-400 cursor-pointer"
            >
              {user ? "Purchase" : "Get Started"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ByCredit;
