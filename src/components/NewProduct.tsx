import React from "react"
import {newProductsArray} from "../constants"
import { image1 } from '../assets'
export const NewProduct=()=>{
  return(
     <div className="newProduct m-10">
     <h2 className="text-3xl m-6">Nouveaux arrivages</h2> 
     <div className="flex items-center">
     {
       newProductsArray.map((item)=>(
       <div className="m-5 bg-amber-400 w-[300px]">
        <img
        src={item.image} 
        alt={item.title} 
        className="w-52 h-52"
        />
        <h3 className="text-2xl text-red-600">{item.title}</h3>
       
        </div>
       ))
     }
     </div>
     </div>
    )
}

