import {motion} from "framer-motion";
import {Link} from "react-router-dom";
import { SingleProduct } from "../types";


type Props = {
    item:SingleProduct
    index:number
};

export const DetailCard=({item,index}: Props) =>{
    return (
        <motion.div
            className="w-[350px]  cursor-pointer flex items-center justify-center"
            initial={{y:200, opacity:0,display:"hidden",}}
            whileInView={{y:0,opacity:1,transition:{type:'tween',duration: 0.5 * index,},display:"block",}}
            key={item._id}
        >
            <div className=" flex flex-col items-center gap-4">
            <Link to={`/detail/${item._id}`}>
            <img src={import.meta.env.VITE_API_URL+item.image }  alt={item.title} />
            <h2 className="text-red-600 text-3xl text-center mt-4">{item.title}</h2>
            <h2 className="text-red-600 text-3xl text-center mt-3">{item.price}€</h2>
            </Link>
          
            </div>
            
        </motion.div>
    );
};