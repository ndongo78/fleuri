import {useSelector, useDispatch} from "react-redux"
import {productState} from "../app/reducers/product"
import { motion } from "framer-motion"

export const Cart = () => {
  const {cart} =useSelector(productState)
  
  console.log(cart)
  return (
    <div className='h-screen'>
    {
      cart.map(({title,description, price, image})=>(
       <motion.div  className="flex shadow-xl m-10">
          <motion.img
             src={`${import.meta.env.VITE_API_URL}${image}` } 
             alt={title} 
             className="w-52 h-52 xs:w-full"
             />
        <h2> {title} </h2>
       </motion.div>
      ))
    }
    </div>
  )
}
