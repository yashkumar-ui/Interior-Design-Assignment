import React from 'react'
import Group25 from '../assets/Group 25.svg';
import Group26 from '../assets/Group 26.svg';
import Group27 from '../assets/Group 27.svg';
import ProcessSectionPic from '../assets/Mask group.svg';

const ProcessSection = () => {
  return (
    <div className='w-11/12 mx-auto py-[4rem] lg:py-[2rem] flex justify-center flex-col lg:flex-row gap-x-[2rem]'> 
       {/* Part1 */}
       <div className='lg:w-[50%] flex flex-col justify-around gap-y-[1rem]'>
          <h2 className='text-[2.6rem]  leading-[1.5]  font-semibold font-inter'>Designing Your dream in three simple steps</h2>
          <div className='grid  grid-cols-1 gap-y-[2.5rem]'>
             {/* grid-1 */}
            <div className='flex flex-row  gap-x-[3rem]'>
                <div className='w-[15%]'>
                    <img src={Group25} alt='group25' loading='lazy' className='w-[60px]'/>
                </div>
                <div className='w-[85%]  flex flex-col gap-y-[1.4rem]'>
                    <h5 className='font-inter text-xl font-semibold pt-[1rem]'>Start Project</h5>
                    <p className='text-[#545454] font-[400] leading-[1.7] '>Embark on your design adventure by initiating your project. Share your vision and set the stage for a bespoke design experience</p>
                </div>
            </div>

             {/* grid-2 */}
             <div className='flex flex-row  gap-x-[3rem]'>
                <div className='w-[15%]'>
                    <img src={Group26} alt='group26' loading='lazy' className='w-[60px]'/>
                </div>
                <div className='w-[85%] flex flex-col gap-y-[1.4rem]'>
                    <h5 className='font-inter text-xl font-semibold pt-[1rem]'>Craft</h5>
                    <p className='text-[#545454] font-[400] leading-[1.7] '>Collaborate closely to achieve design excellence refining your vision and crafting brilliance into every aspect of your space</p>
                </div>
            </div>

            {/* grid-3 */}
            <div className='flex flex-row  gap-x-[3rem]'>
                <div className='w-[15%]'>
                    <img src={Group27} alt='group27' loading='lazy' className='w-[60px]'/>
                </div>
                <div className='w-[85%] flex flex-col gap-y-[1.4rem] '>
                    <h5 className='font-inter text-xl font-semibold pt-[1rem]'>Execute</h5>
                    <p className='text-[#545454] font-[400] leading-[1.7] '>Witness your vision becoming a reality as we execute the design plan with precision. Celebrate the joy of your newly transformed space</p>
                </div>
            </div>

          </div>
       </div>

       {/* Part-2 */}
       <div className='lg:w-[50%]'>
          <img src={ProcessSectionPic} alt='processPic' loading='lazy' className='w-full h-[400px] lg:h-[800px]'/>
       </div>
    </div>
  )
}

export default ProcessSection