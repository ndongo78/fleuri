import {motion} from "framer-motion";
import { useDispatch } from "react-redux";
import {Link} from "react-router-dom";
import { setCart } from "../app/reducers/product";
import { CiShoppingCart } from "react-icons/ci";


type Props = {
    item:{
        title: string
        image: string
        price: number
        descript:string,
        _id: string
    }
    index:number
};

export const CardProduct=({item,index}: Props) =>{
    const dispatch= useDispatch();
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
            <button onClick={()=>dispatch(setCart(item))} 
            className="border border-red-500 p-2 rounded-lg m-auto text-red-400  font-bold flex items-center"
            > <CiShoppingCart size={35}/>
             <span className="ml-1">Ajouter au panier</span>
             </button>
            </div>
            
        </motion.div>
    );
};