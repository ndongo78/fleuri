import { useState } from "react";
import { logo } from "../assets";
import { IoSearchOutline, IoCartOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { productState } from "../app/reducers/product";

export const Header = () => {
  const [isHover, setisHover] = useState(false);
  const [isHoverPanier, setisHoverPanier] = useState(false);
  const [isHoverSearch, setisHoverSearch] = useState(false);

  const {cart}= useSelector(productState)


  return (
    <nav className="flex justify-evenly items-center ">
      <div className="logo relative justify-center items-center md:visible sm:invisible ">
        <h2 className="absolute  top-7 left-8 right-6 bottom-7 text-2xl font-bold font-cursive text-ellipsis text-center text-cyan-300">
          Fleuri
        </h2>
        <img src={logo} alt="" className=" w-32 h-32 p-5" />
      </div>
      <div className="items">
        <ul className=" flex items-center">
          <motion.li
            whileHover={{
              scale: [null, 1.5, 1.4],
              margin: 10,
              color: "blue",
              letterSpacing: 2,
            }}
            transition={{ duration: 0.3 }}
            className=" p-4 text-xl font-semibold leading-4 cursor-pointer text-red-500"
          >
            <Link to="/">Accueil</Link>
          </motion.li>
          <motion.li
            className=" p-4 text-xl font-semibold leading-4 cursor-pointer text-red-500"
            whileHover={{
              scale: [null, 1.5, 1.4],
              margin: 10,
              color: "blue",
              letterSpacing: 2,
            }}
            transition={{ duration: 0.3 }}
          >
            <Link to="/products">produits</Link>
          </motion.li>
          <motion.li
            className=" p-4 text-xl font-semibold leading-4 cursor-pointer text-red-500"
            whileHover={{
              scale: [null, 1.5, 1.4],
              margin: 10,
              color: "blue",
              letterSpacing: 2,
            }}
            transition={{ duration: 0.3 }}
          >
            <Link to="/contact">contact</Link>
          </motion.li>
        </ul>
      </div>
      <div className="item-rigth  flex">
        <motion.div
          onMouseEnter={() => setisHover(true)}
          onMouseLeave={() => setisHover(false)}
          whileHover={{
            scale: [null, 1.1, 1.1],
            margin: 10,
            color: "blue",
            letterSpacing: 2,
          }}
          transition={{ duration: 0.3 }}
          className="text-center flex flex-col items-center justify-center cursor-pointer "
        >
          <Link to="/login">
            <AiOutlineUser className=" text-3xl m-4  cursor-pointer text-red-500" />
            {isHover && <motion.p>Compte</motion.p>}
          </Link>
        </motion.div>
        <motion.div
          onMouseEnter={() => setisHoverPanier(true)}
          onMouseLeave={() => setisHoverPanier(false)}
          whileHover={{
            scale: [null, 1.1, 1.1],
            margin: 10,
            color: "blue",
            letterSpacing: 2,
          }}
          transition={{ duration: 0.3 }}
          className="text-center flex flex-col items-center justify-center cursor-pointer text-red-500 "
        >
          <Link to="/cart" className=" relative">
          <motion.p className=" absolute text-center right-0 text-white bg-red-600 rounded-full w-6"> {cart.length} </motion.p>
            <IoCartOutline className=" text-3xl m-4 cursor-pointer" />
            {isHoverPanier && <motion.p>Pannier</motion.p>}
          </Link>
        </motion.div>
        <motion.div
          onMouseEnter={() => setisHoverSearch(true)}
          onMouseLeave={() => setisHoverSearch(false)}
          whileHover={{
            scale: [null, 1.1, 1.1],
            margin: 10,
            color: "blue",
            letterSpacing: 2,
          }}
          transition={{ duration: 0.3 }}
          className="text-center flex flex-col items-center justify-center cursor-pointer text-red-500"
        >
          <IoSearchOutline className=" text-3xl m-4 cursor-pointer " />
          {isHoverSearch && <motion.p>Rechercher</motion.p>}
        </motion.div>
      </div>
    </nav>
  );
};
