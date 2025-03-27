import React from 'react'
import { assestsImg } from '../assets/assets';

const Footer = () => {
  return (
    <div>
         <div className='flex items-center justify-between gap-4 py-3 mt-20'>
        <img width={70} src={assestsImg.logo} alt="" />
        <p className='flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden'>© 2025 IllustaAI | All Rights Reserved.</p>
        <div className='flex gap-2.5'>
            <img width={35} src={assestsImg.facebook} alt="" />
            <img width={35} src={assestsImg.x} alt="" />
            <img width={35} src={assestsImg.insta} alt="" />
        </div>
    </div>
    </div>
  )
}

export default Footer;