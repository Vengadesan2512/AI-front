import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [credit, setCredit] = useState(false);
const navigate = useNavigate()
  const loadCreditssData = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/user/credits", {
        headers: { token },
      });
      if (data.success) {
        setCredit(data.credits);
        setUser(data.user);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  const backendUrl =
    import.meta.env.VITE_BACKEND_URL || "https://ai-12iw.onrender.com";
  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    setUser(null);
  };
  useEffect(() => {
    if (token) {
      loadCreditssData();
    }
  }, [token]);

  const generateImage = async(prompt)=>{
    try {
      const {data}=await axios.post(backendUrl + '/api/image/generate-image',{prompt},{headers:{token}})
    if(data.success){
    loadCreditssData()
    return data.resultImage
    }else{
      toast.error(data.message)
      loadCreditssData()
      if(data.creditBalance === 0){
navigate('/byCredit')
      }
    }
    } catch (error) {
      toast.error(error.message)
      
    }
  }
  const value = {
    user,
    setUser,
    showLogin,
    setShowLogin,
    backendUrl,
    credit,
    setCredit,
    token,
    setToken,
    loadCreditssData,
    logout,
    generateImage
  };
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
export default AppContextProvider;
