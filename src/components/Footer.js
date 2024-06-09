import React from 'react'
import Insta from '../assets/Instagram (1).svg';
import Linkdien from '../assets/Linkdin.svg';
import facebook from '../assets/Facebook.svg';
import twitter from '../assets/X.svg';
import logo from '../assets/Logo 2.svg';

const Footer = () => {
  return (
    <div className='w-full bg-[#1f1f1f]'>
        <div className='w-11/12 mx-auto flex flex-col md:flex-row gap-y-[4rem] md:gap-y-0 md:gap-x-[2rem] items-center md:items-start justify-between py-[5rem] '>
             {/* 1st part  */}
             <div className='md:w-[33%] flex flex-col items-center md:items-start gap-y-[1.5rem]' >
                <img src={logo} alt='logoq'  className='w-[177px] hover:scale-110 transition-all duration-200 cursor-wait select-none' loading='lazy'/>
                <p className='font-inter text-[#D1D1D1] text-center md:text-start font-light w-full md:w-[60%] leading-[1.6]'>VivaDecor your premier destination for luxury and modern interior design</p>
                <div className='flex flex-row gap-x-4 md:gap-x-3'>
                    <img src={facebook} alt='facebook' loading='lazy' className='hover:scale-110 cursor-pointer transition-all duration-200'/>
                    <img src={twitter} alt='twitter' loading='lazy'  className='hover:scale-110 cursor-pointer transition-all duration-200'/>
                    <img src={Insta} alt='inta' loading='lazy' className='hover:scale-110 cursor-pointer transition-all duration-200'/>
                    <img src={Linkdien} alt='linkdien' loading='lazy' className='hover:scale-110 cursor-pointer transition-all duration-200'/>
                </div>
             </div>

             {/* 2nd part */}
             <div className='md:w-[77%] w-full flex flex-col gap-y-[2rem]  md:gap-y-0  md:items-start md:flex-row  md:justify-around '>
                 {/* 1 */}
                 <div className=' flex flex-col gap-y-[2rem] font-inter border-b-2 md:border-b-0'>
                    <h5 className='text-[#FFFFFF] tracking-[0.13em]'>Our Services</h5>
                    <div className='flex flex-col gap-y-[1rem] text-[#D1D1D1] text-sm font-inter font-light'>
                        <p>Interior Design</p>
                        <p>Outdoor Design</p>
                        <p>Lighting Design</p>
                        <p>Office Design</p>
                    </div>
                 </div>

                  {/* 2 */}
                 <div className='flex flex-col gap-y-[2rem] font-inter border-b-2 md:border-b-0'>
                    <h5 className='text-[#FFFFFF] tracking-[0.13em]'>Our Services</h5>
                    <div className='flex flex-col gap-y-[1rem] text-[#D1D1D1] text-sm font-inter font-light'>
                        <p>Reviews</p>
                        <p>Careers</p>
                        <p>Pricing</p>
                        <p>Press Inquires</p>
                    </div>
                 </div>

                 {/* 3 */}
                 <div className='flex flex-col gap-y-[2rem] font-inter'>
                     <h5 className='text-[#FFFFFF] tracking-[0.13em]'>Our Services</h5>
                     <div className='flex flex-col gap-y-[1rem] text-[#D1D1D1] text-sm font-inter font-light'>
                        <p>YashKumar@gmail.com</p>
                        <p className='w-[50%]'>Design Avenue Cityville, CA 90210 United States</p>
                     </div>

                 </div>
             </div>
        </div>
    </div>
  )
}

export default Footer