import {newProductsArray} from "../constants"
import { Variants, motion } from "framer-motion"
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export const NewProduct=()=>{
  

  const anim=(index:number)=>{
      const cardVariants: Variants = {
        offscreen: {
         y: 70,
         opacity: 0
        },
        onscreen: {
          y: 0,
          opacity:1,
          rotate: 0,
          transition: {
            type: "just",
            bounce: 0.4,
            duration: 1 * index,
          }
        }
      };
      return cardVariants
  }
  return(
     <div className="newProduct m-10 ">
      <div className=" flex justify-between">
     <h2 className="text-5xl m-8 text-red-600 ">Nouveaux arrivages</h2> 
     <div className=" visible xs:invisible">
      <button className="lg:border text-red-700  border-red-600 p-3 w-36 font-bold hover:bg-[#eb86b8]">Voir plus</button>
     </div>
      </div>
     <Carousel
     containerClass="carousel"
     responsive={responsive}
     ssr
     arrows
     customLeftArrow={
      <AiOutlineArrowLeft
        className="absolute left-2 cursor-pointer bg-slate-800 rounded-full text-white p-3"
        size={45}
      />
     }
     customRightArrow={
      <AiOutlineArrowRight
        className="absolute right-2 cursor-pointer bg-slate-800 rounded-full text-white p-3"
        size={45}
      />
     }
     
     >
  
     {
       newProductsArray.map((item,index)=>(
       <motion.div
      variants={anim(index)}
        className="lg:m-5 cursor-pointer w-[400px] flex flex-col items-center"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        >
        <motion.img
        src={item.image} 
        alt={item.title} 
        className="w-52 h-52 xs:w-full"
        />
        <h3 className="text-2xl text-red-600 m-2  font-bold text-center">{item.title}</h3>
        <h3 className="text-xl text-red-600">{item.price}€</h3>
        
        </motion.div>
       ))
     }
     </Carousel>
     </div>
    )
}

