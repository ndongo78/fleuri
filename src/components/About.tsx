import { motion } from 'framer-motion'
import { image6, image7 } from '../assets'

export const About = () => {
  return (
    <div className='flex m-10 justify-evenly relative w-full '>
            <motion.div className=" w-96 mt-32"
              initial={{x:-100, opacity:0,display:"hidden"}}
              whileInView={{x:0,opacity:1,transition:{type:'spring',duration:5},display:"block"}}
            >
            <h3 className=' text-4xl font-bold text-red-600 m-3 '>Tulipa gesneriana</h3>
               <p className='m-3 font-semibold'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium error in, molestiae fuga aut laboriosam nulla, deserunt, nam eum itaque possimus corrupti accusamus repudiandae reprehenderit cumque labore aliquid veritatis nihil?
               </p>
            </motion.div>
                <motion.div 
                className=" bg-slate-200 mt-24 w-72 h-96 flex items-center justify-center border-white border-8"   >
                <motion.img src={image7} className=' w-72 h-96' alt=""    initial={{x:100, opacity:0,display:"hidden"}}
                whileInView={{x:0,opacity:1,transition:{type:'spring',duration:5},display:"block"}}  />
                <div className='w-52 h-52 absolute rotate-12   right-32 -bottom-14 bg-slate-200  border-white border-8'>
                <motion.img  initial={{x:-100, opacity:0,display:"hidden"}}
              whileInView={{x:0,opacity:1,transition:{type:'spring',duration:5},display:"block"}} src={image6} className=' w-52 h-52 absolute   ' alt=""  />
                </div>
            </motion.div>
    </div>
  )
}

