import React ,{useState} from 'react'
import emailjs from 'emailjs-com';
import { toast } from 'react-hot-toast';
import star1 from '../assets/Star 1.svg';
import star3 from '../assets/Star 3.svg';


const Mail = () => {

    const [phoneNumber, setPhoneNumber] = useState('');
    const [query, setQuery] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        
    
        const templateParams = {
          phoneNumber,
          query,
        };
    
        emailjs.send('service_k7di3cp', 'template_sl3sx8j', templateParams, 'QBb55caxviewZ1qmb')
          .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            toast.success("Submit Successfully");
            setPhoneNumber('');
            setQuery('');
          })
          .catch((error) => {
            console.log('FAILED...', error);
            toast.error("Failed , Send again.."); 
          });
      };



  return (
    <div className='w-11/12 mx-auto flex flex-col gap-y-[3rem] py-[4rem] relative'>
        <h2 className='font-inter text-5xl font-[500] text-center'>Contact Us for Design Insights</h2>

        <form className='flex w-full md:w-[70%] justify-center mx-auto px-[4rem]  gap-y-4 flex-col p-2 py-[3rem] bg-[#1F1F1F] ' onSubmit={handleSubmit}>
            <label className='w-full'>
                <p className='text-[0.875rem] tracking-[0.15em] capitalize font-inter text-[#FFF5EE] mb-1 leading-[1.375rem]'>Phone number</p>
                <input type='text' className='bg-[#FFF5EE] rounded-[0.5rem] w-full text-[#0D0706] p-[10px] placeholder:font-inter placeholder:font-light' id='phoneNumber' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder='Enter Phone Number' required/>
            </label>

            <label>
                <p className='text-[0.875rem] tracking-[0.15em] capitalize font-inter text-[#FFF5EE] mb-1 leading-[1.375rem]'>Your Query:</p>
                <textarea type='text' id='query' className='bg-[#FFF5EE] rounded-[0.5rem] w-full text-[#0D0706] py-[20px] p-[10px] placeholder:font-inter placeholder:font-light' value={query} onChange={(e) => setQuery(e.target.value)} required placeholder='Enter Query...'/>
            </label>

            <button className='py-4 px-[4rem] font-inter mt-[1.5rem] font-[400] tracking-[0.09em] rounded-sm uppercase hover:scale-105 transition-all duration-200  bg-[#FFF5EE] mx-auto text-[#1f1f1f]' type='submit'>Submit</button>
        </form>

        
        <h3 className='font-inter font-[300] text-xl md:w-[50%] capitalize leading-[1.9] underline mx-auto text-center'>Be the first to discover trends, inspirations, and special offers as we bring the world of design directly to your inbox</h3>

        <img src={star1} alt='start1' loading='lazy' className='absolute left-1 lg:left-4 top-[10%]'/>
        <img src={star3} alt='star2' loading='lazy' className='absolute right-1 bottom-1 md:right-[6%] md:bottom-[12%] w-[56px]' />
    </div>
  )
}

export default Mail