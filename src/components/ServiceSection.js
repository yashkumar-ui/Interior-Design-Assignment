import React from 'react'
import LightningDesignPic from '../assets/Lighting design icon.svg';
import InteriorDesignPic from '../assets/Interior design icon.svg';
import OutdoorDesignPic from '../assets/Outdoor design icon.svg';

const ServiceSection = () => {
  return (
    <div className='mt-[4rem] w-11/12 mx-auto flex flex-col gap-y-[2rem] min-h-[352px]'>
        <div className='py-4 flex flex-row gap-x-[1rem] items-center'>
            <div className='h-[0.17rem] rounded-md w-[4.5rem] bg-black'></div>
            <h2 className='font-inter font-[500] text-5xl '>Our Services</h2>
        </div>

        {/* 2nd portion */}
        <div className='py-3 flex flex-col gap-y-[2rem] sm:flex-row justify-between gap-x-[2rem]'>
            {/* 1st div */}
            <div className='flex flex-row gap-x-[1.5rem]'>
                <div>
                    <img src={LightningDesignPic} alt='lightpic' loading='lazy' className='w-[150px] h-[70px]'/>
                </div>
                <div className='flex flex-col font-inter justify-between gap-y-5'>
                   <h4 className=' text-xl md:text-2xl font-[400] tracking-[0.12em]'>Lighting Design</h4>
                   <p className='text-[#545454] font-light tracking-[0.07em]  leading-[1.8]'>Achieve the perfect balance of ambient, task, and accent lighting for a functional atmosphere</p>
                </div>
            </div>
            {/* 2nd div */}
            <div className='flex flex-row gap-x-[1.5rem]'>
                <div>
                    <img src={InteriorDesignPic} alt='ip' loading='lazy' className='w-[150px] h-[70px]'/>
                </div>
                <div className='flex flex-col font-inter justify-between gap-y-4'>
                   <h4 className=' text-xl md:text-2xl font-[400] tracking-[0.12em]'>Interior Design</h4>
                   <p className='text-[#545454] font-light tracking-[0.07em]  leading-[1.8]'>From concept to completion, we oversee every detail to bring your vision to life efficiently</p>
                </div>
            </div>

            {/* 3rd div */}
            <div className='flex flex-row gap-x-[1.5rem]'>
                <div>
                    <img src={OutdoorDesignPic} alt='outdoorpic' loading='lazy' className='w-[150px] h-[70px]'/>
                </div>
                <div className='flex flex-col font-inter justify-between'>
                   <h4 className=' text-xl md:text-2xl font-[400] tracking-[0.12em]'>Outdoor Design</h4>
                   <p className='text-[#545454] font-light tracking-[0.07em]  leading-[1.8]'>Celebrate the changing seasons with our seasonal outdoor decor services</p>
                </div>
            </div>
        </div>
   </div>
  )
}

export default ServiceSection