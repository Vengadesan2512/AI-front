import React, { useContext } from "react";
import { assestsImg, home } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import {useNavigate} from 'react-router-dom'

const Header = () => {
  const {user,setShowLogin}=useContext(AppContext)
 const navigate = useNavigate()
  const onClickHandler=()=>{
if(user){
  navigate('/result')
}else{
  setShowLogin(true)
}
  }
  return (
    <div className="flex flex-col justify-center items-center text-center my-20 ">
      <div className="text-stone-500 inline-flex items-center gap-2 bg-white px-6 py-1 rounded-full border border-neutral-500 shadow-[5px_5px_10px_#9b9b9b] ">
        <p>Transform Words into Stunning Images Instantly!</p>
        <img className="w-5 h-5" src={assestsImg.star} alt="" />
      </div>
      <h1 className="text-center mx-auto mt-10 text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px]">
        Bring your words to life with{" "}
        <span className="text-blue-600"> AI-generated images</span> in seconds!
      </h1>
      <p className="text-center max-w-xl mx-auto mt-5">
        Transform your ideas into stunning art—AI makes creativity effortless!
      </p>
      <button onClick={onClickHandler} className=' shadow-[5px_5px_10px_#9b9b9b] sm:text-lg text-white bg-blue-600 w-auto mt-8 px-12 py-2.5 flex items-center gap-2 rounded-full hover:bg-black transition-all duration-1000 cursor-pointer'>Generate Images <img className='h-6 object-cover bg-yellow-300 rounded-full' src={assestsImg.strgroup} alt="" /></button>

      <div className='flex flex-wrap justify-center mt-16 gap-3'>
  {home.map((item) => (
    <img  key={item.id} src={item.Image} alt={`Image ${item.id}`} className="w-32 h-32 object-cover rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10 shadow-[0_5px_10px_#000000]" />
  ))}
 
</div>
 <p className='mt-10 text-neutral-600'>Generated images from IllustraAI</p>
    </div>
  );
};

export default Header;
