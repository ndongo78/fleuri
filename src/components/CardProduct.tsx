import {motion} from "framer-motion";
import { useDispatch } from "react-redux";
import {Link} from "react-router-dom";
import { setCart } from "../app/reducers/product";


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
            className="w-[350px] cursor-pointer flex items-center justify-center"
            initial={{y:200, opacity:0,display:"hidden",}}
            whileInView={{y:0,opacity:1,transition:{type:'tween',duration: 0.5 * index,},display:"block",}}
            key={item._id}
        >
            <div className=" flex flex-col items-center gap-4">
            <Link to={`/${item._id}/detail`}>
            <img src={import.meta.env.VITE_API_URL+item.image }  alt={item.title} />
            <h2 className="text-red-600 text-3xl text-center mt-4">{item.title}</h2>
            <h2 className="text-red-600 text-3xl text-center mt-3">{item.price}€</h2>
            </Link>
            <button onClick={()=>dispatch(setCart(item))} className="bg-red-400 w-[200px] p-4 rounded-lg m-auto text-white  font-bold">Ajouter au panier</button>
            </div>
            
        </motion.div>
    );
};