import { motion } from "framer-motion"
import {categoriesArray} from "../constants"


export const Category=()=>{
  return(
     <div className="newProduct m-40  md:flex md:flex-col md:self-center md:justify-self-center sm:flex flex-col">
      <div className=" flex justify-between">
     <motion.h2
         initial={{y:50, opacity:0}}
         whileInView={{y:0,opacity:1,transition:{type:'tween',duration:1}}}
         className="text-5xl m-8 text-red-600 ">Chaque évenement de la vie avec son bouquet de fleur </motion.h2>
     <div className="button">
      {/* <button className=" border text-red-700 border-red-600 p-3 w-36 font-bold hover:bg-[#eb86b8]">Voir plus</button> */}
     </div>
      </div>
     <div className="md:flex md:flex-row md:items-center sm:flex-col  flex-wrap gap-2 self-center">
     {
       categoriesArray.map((item,index)=>(
       <motion.div 
       className="m-2 cursor-pointer w-[200px] shadow
       rounded bg-[#fdd] justify-center flex flex-col items-center place-content-center"
       initial={{y:200, opacity:0,display:"hidden",}}
       whileInView={{y:0,opacity:1,transition:{type:'tween',duration:1 * index,},display:"block",}}
       >
        <img
        src={item.image} 
        alt={item.title} 
        className="w-[90%] h-64 bg-cover object-fill m-3 hover:scale-95"
        />
        <h3 className="text-2xl text-red-600 m-3 font-bold text-center">{item.title}</h3>
       
        </motion.div>
       ))
     }
     </div>
     </div>
    )
}


