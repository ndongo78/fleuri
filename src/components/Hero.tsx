import { deco3, hero } from '../assets'
import {  motion } from "framer-motion"

export const Hero = () => {

  return (
    <motion.div
     className="h-96 mb-[250px] relative"
     initial={{opacity:0}}
     whileInView={{opacity:1}}
     >
    <div className='relative'>
        <div className=" flex justify-around  relative">
      <motion.div  initial={{x:-300, opacity:0}}
      whileInView={{x:0,opacity:1,transition:{type:'spring',duration:5}}} className='bg-[#f2c0da]  w-96 h-96 rounded-full -z-50 absolute top-20' />
      <motion.div  initial={{y:-300, opacity:0}}
      whileInView={{y:0,opacity:1,transition:{type:'spring',duration:3,},rotateY:360}}  className='bg-[#f2c0da] w-10 h-10 rounded-full -z-50 absolute left-10 -bottom-96  '/>
      <motion.div initial={{x:-300, opacity:0}}
      whileInView={{x:0,opacity:1,transition:{type:'spring',duration:3,},rotateX:360}} className='bg-[#f2c0da] w-14 h-14 rounded-full -z-50  '/>
      <motion.div initial={{x:-100, opacity:0}}
      whileInView={{x:0,opacity:1,transition:{type:'spring',duration:5,},rotateY:360}} className='bg-[#f2c0da] w-7 h-7 rounded-full -z-50  '/>
      </div>
       <motion.img src={deco3} alt="" initial={{x:100, opacity:0}}
      whileInView={{x:0,opacity:1,transition:{type:'spring',duration:3,},}} className=' w-32 h-32 rounded-full absolute right-8 '  />
      <motion.img 
      initial={{x:-300, opacity:0,}}
      whileInView={{x:0,opacity:1,transition:{type:'spring',duration:5}}}
      src={hero}  
      alt="" 
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
    </motion.div>
  )
}
