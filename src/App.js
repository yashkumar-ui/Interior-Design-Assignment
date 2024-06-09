import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Herosection from './components/Herosection';
import ServiceSection from './components/ServiceSection';
import ProcessSection from './components/ProcessSection';
import Mail from './components/Mail';

const App = () => {
  return (
    <div className='w-screen h-screen p-0 m-0 overflow-x-hidden '>
       <Navbar/> 
       <Herosection/> 
       

    </div>
  )
}

export default App