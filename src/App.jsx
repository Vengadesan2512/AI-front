import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Result from "./pages/Result";
import ByCredit from "./pages/ByCredit";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Login from "./components/Login";
import { AppContext } from "./context/AppContext";
import { ToastContainer, toast } from "react-toastify";
import Loader from "./loader";



function App() {
  const { showLogin } = useContext(AppContext);
  const[isConnected,setIsConnected]=useState(false)
   useEffect(() => {
    // Check backend connection
    const connectToBackend = async () => {
      try {
        const response = await fetch("https://ai-12iw.onrender.com");
        if (response.ok) {
          setIsConnected(true);
        }
      } catch (error) {
        console.error("Failed to connect to backend:", error);
      }
    };

    connectToBackend();
  }, []);

  // Show Loader until the backend connection is established
  if (!isConnected) {
    return <Loader/>;
  }
  return (
    <div className="px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen ">
      <ToastContainer position="bottom-right" />
      <NavBar />
      {showLogin && <Login />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
        <Route path="/byCredit" element={<ByCredit />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
