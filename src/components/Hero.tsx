import React from 'react'
import { hero } from '../assets'


export const Hero = () => {
  return (
    <div className="h-96 mb-[250px]">
    <div className='relative'>
        <div className=" flex justify-around  relative">
      <div className='bg-[#f2c0da]  w-96 h-96 rounded-full -z-50 absolute top-20' />
      <div  className='bg-[#f2c0da] w-10 h-10 rounded-full -z-50 absolute left-3 -bottom-10  '/>
      <div className='bg-[#f2c0da] w-14 h-14 rounded-full -z-50 '/>
      <div className='bg-[#f2c0da] w-20 h-20 rounded-full -z-50 '/>
      <div className='bg-[#f2c0da] w-20 h-20 rounded-full -z-50 absolute right-10 bottom-10 '/>
      </div>
      <img src={hero} alt="" className='' 
      style={{
        position: 'absolute',
         left:0,
         right:0, 
         margin:"auto",
         top:70,
      }}  
      />
      </div>
    </div>
  )
}
