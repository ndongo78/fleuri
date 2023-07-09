import { useDispatch, useSelector } from "react-redux"
import { productState, setCart } from "../app/reducers/product"
import { useParams, useNavigate } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { SingleProduct } from "../types";
import { useEffect } from "react";


export const Detail = () => {
  const dispatch= useDispatch();
  const navigate=useNavigate();
  let produits:SingleProduct | null=null;
  const {product}= useSelector(productState)
  const { id }:any = useParams();
  if(id){
    produits=product.find( (products: {
      _id: any; id: any; 
}) => id==products._id)
  }
 
  useEffect(() => {
    if(!produits) {
      navigate('/products')
    }
  }, [produits])
  
  
  return (
    <div className=" flex justify-center mt-10 mb-20">
         <img src={import.meta.env.VITE_API_URL+produits?.image } className="" />
         <div className=" mt-20 w-4/12 flex flex-col gap-16 ml-14">
           <h2 className="text-4xl font-bold text-red-400"> {produits?.title} </h2>
           <div className="text-xl "> {produits?.description} </div>
           <div className="flex flex-col items-center justify-center  sm:flex-row">
            <h2 className="text-red-400 text-4xl font-bold mb-5 sm:m-0"> {produits?.price} € </h2>
           <button onClick={()=>dispatch(setCart(produits))} 
            className="border border-red-500 p-2 rounded-lg m-auto text-red-400  font-bold flex items-center"
            > <CiShoppingCart size={35}/>
             <span className="ml-1">Ajouter au panier</span>
             </button>
           </div>
         </div>
        </div>
  )
}
