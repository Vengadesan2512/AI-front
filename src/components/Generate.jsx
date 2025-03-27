import React, { useContext } from 'react'
import '../css/external.css'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const Generate = () => {
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
    <div  className='pb-16 text-center'>
        <h1 className='text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold text-neutral-800 py-6 md:py-16'>Experience the magic—Try it now! </h1>
 
<div className='inline-flex items-center gap-2 px-12 py-3 rounded-full bg-black text-white m-auto hover:scale-105 transition-all duration-500 cursor-pointer'>

<button onClick={onClickHandler} className='start'>
  Start The Magic
</button>
</div>
    </div>
  )
}

export default Generate;