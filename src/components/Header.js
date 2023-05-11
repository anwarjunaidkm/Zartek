import React from 'react'
import { IoCart } from 'react-icons/io';
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';


const Header = () => {
    const value = useSelector((state)=>state.counter.value)
  return (
    <>
  
    
    <div className="w-full h-[80px] flex justify-between items-center px-4 bg-[#ffffff] text-gray-900"> 
    
    
     
    <div className=''>
    
        {/* <h1>UNI Resto Cafe</h1> */}
        <h1></h1>
       

        
    </div>
    <div className='flex justify-center items-center  '>
            <h1 className='mx-2'>MyOrder</h1>
           
            <FaShoppingCart size={22} color='gray'/>
            <span className='bg-red-600 text-white rounded-full text-[10px] px-1 ml-[-10px] mb-[15px]'>{value}</span>

        </div>
    
        
    
    </div>
    </>
    
  )
}

export default Header