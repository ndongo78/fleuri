import { useSelector, useDispatch } from "react-redux";
import { addQty, deleteFromCart, productState, removeQty } from "../app/reducers/product";
import { motion } from "framer-motion";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { BsFillTrash3Fill } from "react-icons/bs";

export const Cart = () => {
  const { cart } = useSelector(productState);
  const dispatch = useDispatch()

  return (
    <div className="flex flex-col  items-center">
      {cart.length == 0 ? (
        <div className=" flex justify-center items-center h-80">
          <h2 className=" text-xl font-bold">Votre panier est vide</h2>
        </div>
      ) : (
        cart.map(
          ({
            title,
            description,
            price,
            image,
            qty,
            _id
          }: {
            title: string;
            description: string;
            price: number;
            image: string;
            qty:number;
            _id:string
          }) => (
            <motion.div className="flex shadow-2xl m-10 w-[90%] justify-start rounded-xl items-center bg-white sm:w-[50%] relative">
              <motion.img
                src={`${import.meta.env.VITE_API_URL}${image}`}
                alt={title}
                className=" h-52 p-2"
              />
              <div className="">
                <h2 className=" text-2xl font-bold text-[#e2f] mb-3">
                  {" "}
                  {title}{" "}
                </h2>
                <div className=" text-sm"> {description} </div>
                <h3 className=" text-2xl font-bold text-[#e2f] mb-3 mt-3">Prix: {price * qty}€ </h3>
                <div className=" flex items-center gap-4">
                  <IoIosRemoveCircleOutline size={30} className="text-[#e2f] cursor-pointer" onClick={()=>dispatch(removeQty({
            title,
            description,
            price,
            image,
            qty,
            _id
          }))}/>
                  <p className=" font-bold"> {qty} </p>
                  <AiOutlinePlusCircle size={30} className="text-[#e2f] cursor-pointer" onClick={()=>dispatch(addQty({
                title,
                description,
                price,
                image,
                qty,
                _id
              })) }  />
                </div>
              </div>

              <BsFillTrash3Fill  className="absolute top-3 right-4 cursor-pointer text-[#e2f]" size={25} onClick={()=>dispatch(deleteFromCart({
                title,
                description,
                price,
                image,
                qty,
                _id
              }))} />

            </motion.div>
          )
        )
      )}
      {
        cart.length > 0 && <button onClick={()=>{}} className="inline-block w-[250px] py-4 px-6 mb-6 text-center text-lg leading-6 text-white font-extrabold bg-[#e54] hover:bg-[#e54] border-3 border-indigo-900 shadow rounded-xl transition duration-200">Payer ma commande</button>

      }
    </div>
  );
};
