import React from 'react'
import Testimonial1 from '../assets/Testamonial 1.svg';
import Testimonial2 from '../assets/Testamonial 2.svg';
import Person1 from '../assets/Mask group (1).svg';
import Person2 from '../assets/Mask group (2).svg';
import Testi from '../assets/TestaBg.svg';

const Testimonials = () => {
  return (
    <div className='w-11/12 mx-auto relative flex flex-col py-[1rem]'>
      
            <h3 className=' lg:pl-3  lg:py-[1rem] md:w-[50%] mb-[2%] ml-auto font-[500] pb-[2rem] md:pb-0 capitalize leading-[1.3] text-4xl md:text-4xl lg:text-5xl font-inter'>What Our Customers Say About us</h3>
        
        <div className='md:w-[85%] ml-auto flex  gap-y-[2rem] md:gap-y-0 gap-x-[1rem] flex-col md:flex-row p-[1.4rem]'>
            <div className='relative'>
                <img src={Testimonial1} width={600} height={600} className='select-none' alt='testimonal' loading='lazy'/>
                <img src={Person1} alt='person1' loading='lazy' className='absolute z-[2] w-[40px] lg:w-[72px] left-[8%] bottom-[18%]'/>
            </div>
            <div className='relative'>
                <img src={Testimonial2} alt='testi2' width={600} height={600} className='select-none' loading='lazy'/>
                <img src={Person2} loading='lazy' alt='person2' className='absolute z-[2] w-[40px] lg:w-[72px] left-[8%] bottom-[18%]'/>
            </div>
        </div>
        
        <img src={Testi} alt='testtt' loading='lazy' className='absolute w-[48%] hidden md:block -z-[2] top-0 left-0 '/>
    </div>
  )
}

export default Testimonials