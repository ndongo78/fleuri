import React from 'react'
import { deco1, deco2, deco3, hero } from '../assets'


export const Hero = () => {
  return (
    <div className="h-96 mb-[250px] relative">
    <div className='relative'>
        <div className=" flex justify-around  relative">
      <div className='bg-[#f2c0da]  w-96 h-96 rounded-full -z-50 absolute top-20' />
      <div  className='bg-[#f2c0da] w-10 h-10 rounded-full -z-50 absolute left-10 -bottom-96  '/>
      <div className='bg-[#f2c0da] w-14 h-14 rounded-full -z-50  '/>
      <div className='bg-[#f2c0da] w-7 h-7 rounded-full -z-50  '/>
      </div>
       <img src={deco3} alt="" className=' w-32 h-32 rounded-full absolute right-8 '  />
      <img src={hero}  alt="" className='' 
      style={{
        position: 'absolute',
        left:0,
        right:0, 
        margin:"auto",
        top:70,
      }}  
      />
      </div>
      <div className='bg-[#f2c0da] w-20 h-20 rounded-full -z-50 absolute right-10 bottom-10 '/>
    </div>
  )
}
