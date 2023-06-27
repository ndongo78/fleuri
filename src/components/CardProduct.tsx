
import {motion} from "framer-motion";
import {useNavigate} from "react-router-dom";

type Props = {
    item:{
        title: string
        image: string
        price: number
        descript:string
    }
    index:number
};

export const CardProduct=({item,index}: Props) =>{
    const navigate=useNavigate()
    return (
        <motion.div
            className="w-[300px] cursor-pointer"
            initial={{y:200, opacity:0,display:"hidden",}}
            whileInView={{y:0,opacity:1,transition:{type:'tween',duration: 0.5 * index,},display:"block",}}
            onClick={()=>navigate("")}
            key={index}
        >
            <img src={import.meta.env.VITE_API_URL+item.image }  alt={item.title} />
            <h2 className="text-red-600 text-3xl text-center">{item.title}</h2>
            <h2 className="text-red-600 text-3xl text-center mt-3">{item.price}€</h2>
        </motion.div>
    );
};