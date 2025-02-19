import React from 'react'
import Logo from '../images/Logo.png';

const Nav = () => {
  return (
    <div className=' flex justify-around items-center transition-all ease-in bg-black/25 backdrop-blur-md h-[65px] '>
      <img src={Logo} className=' w-[90px]'  />
      <ul className='  gap-14 hidden md:flex  text-white transition-all ease-in '>
        <li className=' text-yellow-400 cursor-pointer font-bold ' >Our Hotels</li>
        <li className=' hover:text-yellow-400  cursor-pointer ' >Promotion</li>
        <li className=' hover:text-yellow-400  cursor-pointer ' >Restaurant</li>
        <li className=' hover:text-yellow-400  cursor-pointer ' >Banquets</li>
        <li className=' hover:text-yellow-400  cursor-pointer ' >Contact</li>
      </ul>
    </div>
  )
}

export default Nav