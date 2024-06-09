import React from 'react'
import logo from '../assets/Logo.svg';

const Navbar = () => {
  return (
    <div className=' p-0 m-0'>
        <div className='w-11/12 mx-auto flex items-center py-5 md:px-[3rem]  justify-between'>
              <div>
                <img src={logo} loading='lazy' alt='logo' className='w-[170px] h-[40px] hover:scale-105 transiton-all duration-200 cursor-crosshair' />
              </div>
            <ul className=' hidden md:flex  font-inter font-[600] text-lg flex-row gap-x-5'>
                <li className='text-[#1F1F1F] hover:scale-105 transition-all duration-200 cursor-pointer '>Home</li>
                <li className='text-[#545454] hover:scale-105 transition-all duration-200 cursor-pointer'>Services</li>
                <li className='text-[#545454] hover:scale-105 transition-all duration-200 cursor-pointer'>Contact</li>
                <li className='text-[#545454] hover:scale-105 transition-all duration-200 cursor-pointer'>Support</li>
            </ul>
            <button className=' py-3 font-inter font-light px-[3rem] bg-[#1F1F1F] hover:bg-[#545454] hover:scale-105 transition-all duration-200 text-white rounded-md'>Sign Up</button>
        </div>
    </div>
  )
}

export default Navbar