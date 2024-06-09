import React from 'react'
import Image1 from '../assets/Image 1.svg';
import Image2 from '../assets/Image 2.svg';
import ArrowImage from '../assets/Arrow down.svg';
import Rectangle from '../assets/Rectangle 60.svg';
import ServiceSection from './ServiceSection';
import ProcessSection from './ProcessSection';
import Testimonials from './Testimonials';
import Mail from './Mail';
import Footer from './Footer';

const Herosection = () => {
  return (

   <div className='w-full h-full bg-[#ffffff]'>
      <div className='w-11/12  mx-auto flex flex-col gap-y-[1rem] pt-[2rem]'>
        {/* 1-parttttt */}
        <div className='relative w-full flex md:flex-row flex-col gap-y-8 md:gap-y-0  justify-center px-3 '>
           <div className=' w-[100%] md:w-[65%] flex flex-col gap-y-10 justify-center'>
               <h1 className=' text-3xl sm:text-4xl md:text-6xl lg:text-8xl text-center md:text-left font-inter font-[400] capitalize tracking-[.07em]'>Interior Design</h1>
               <p className='font-inter text-[#545454] part1Para leading-[1.5] select-none px-2  md:w-[70%]'>Step into a world where the art of Interior Design is meticulously crafted to bring together timeless elegance and cutting-edge 
                   modern Innovation, Allowing you to transform your living spaces into the epitome of luxury and sophistication</p>
          </div>

          <div className='  md:w-[35%]  '>
               <img src={Image1} loading='lazy'  alt='img1' className=' select-none w-full   top-0 right-4 -z-[1]'/>
          </div>
        </div>

        {/* 2-parttt */}
        <div className=' w-full flex flex-col md:flex-row md:gap-x-4   '>
            {/* Part 1 */}
            <div className=' flex flex-col justify-evenly md:w-[50%] py-[4rem]  md:py-0 p-4 md:p-0 md:gap-y-2 gap-y-[3rem]'>
               <div className=''>
                  <button className='py-4 px-[3rem] bg-[#1f1f1f] text-white font-inter font-light rounded-sm hover:bg-[#545454] hover:scale-105  transition-all duration-200 mx-auto'>Start Project</button>
               </div>
               
                <div className='flex flex-row w-full justify-between px-[1rem] gap-x-2 '>
                    <div className='font-inter flex flex-col gap-y-4 text-[#545454]'>
                        <h4 className='md:text-5xl text-3xl font-semibold'>400+</h4>
                        <p className='font-light tracking-[0.17em]'>Project Complete</p>
                    </div>
                    <div className='font-inter flex flex-col gap-y-4 text-[#545454]'>
                        <h4 className='md:text-5xl text-3xl font-semibold'>600+</h4>
                        <p className='font-light tracking-[0.17em]'>Satisfied Clients</p>
                    </div>
                    <div className='font-inter flex flex-col gap-y-4 text-[#545454]'>
                        <h4 className='md:text-5xl text-3xl font-semibold'>100+</h4>
                        <p className='font-light tracking-[0.17em]'>Unique Styles</p>
                    </div>
                </div>
            </div>

            {/* Part - 2 */}
            <div className='relative w:full md:w-[50%] ' >
                <img src={Image2} alt='img111' loading='lazy' className=' w-full select-none'/>
                <img src={ArrowImage} alt='ArrowPic' loading='lazy' className='absolute w-[100px] h-[100px] right-0 z-[3] bottom-0'/>
                <img src={Rectangle} alt='Rectangle' loading='lazy' className='absolute -z-[4] hidden md:block  -top-4 -left-4'/>
            </div>
        </div>
      </div>
       
      <ServiceSection/>

      <ProcessSection/>

      <Testimonials/>

      <Mail/>

      <Footer/>

   </div> 

  )
}

export default Herosection