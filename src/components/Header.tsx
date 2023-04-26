import React from 'react'
import { logo } from '../assets'
import { IoSearchOutline,IoCartOutline} from "react-icons/io5";
import {AiOutlineUser} from "react-icons/ai"

export const Header = () => {
  return (
        <nav className=' flex justify-evenly items-center'>
          <div className="logo relative ">
             <h2 className='xs:relative absolute top-7 left-8 right-6 bottom-7 text-2xl font-bold font-cursive text-ellipsis text-center text-cyan-300'>Fleuri</h2>
            <img src={logo} alt=""  className=' w-32 h-32 p-5'/>
          </div>
          <div className="items">
              <ul className=' flex items-center'>
                <li className=' p-4 text-xl font-semibold leading-4 cursor-pointer'>Accueil</li>
                <li className=' p-4 text-xl font-semibold leading-4 cursor-pointer'>Nos produits</li>
                <li className=' p-4 text-xl font-semibold leading-4 cursor-pointer'>Nous contacter</li>
              </ul>
          </div>
          <div className="item-rigth  flex">
            <AiOutlineUser className=' text-3xl m-4  cursor-pointer' />
            <IoCartOutline className=' text-3xl m-4 cursor-pointer' />
           <IoSearchOutline className=' text-3xl m-4 cursor-pointer ' />
          </div>
        </nav>
  )
}
