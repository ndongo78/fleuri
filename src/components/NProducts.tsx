import {newProductsArray} from "../constants"
import { Variants, motion } from "framer-motion"
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };

export const NProduct=()=>{
  

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
     <Slider {...settings}
     >
  
     {
       newProductsArray.map((item,index)=>(
       <motion.div
        className="lg:m-5 cursor-pointer w-[400px] "
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        >
        <motion.img
        src={item.image} 
        alt={item.title} 
        className="w-52 h-52"
        />
        <h3 className="text-2xl text-red-600 m-2  font-bold text-center">{item.title}</h3>
        <h3 className="text-xl text-red-600 text-center">{item.price}€</h3>
        
        </motion.div>
       ))
     }
     </Slider>
     </div>
    )
}

