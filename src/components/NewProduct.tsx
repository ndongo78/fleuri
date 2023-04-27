import {newProductsArray} from "../constants"


export const NewProduct=()=>{
  return(
     <div className="newProduct m-10 ">
      <div className=" flex justify-between">
     <h2 className="text-5xl m-8 text-red-600 ">Nouveaux arrivages</h2> 
     <div className="button">
      <button className=" border text-red-700 border-red-600 p-3 w-36 font-bold hover:bg-[#eb86b8]">Voir plus</button>
     </div>
      </div>
     <div className="md:flex md:flex-row md:items-center sm:flex-col">
     {
       newProductsArray.map((item)=>(
       <div className="m-5 cursor-pointer w-[500px] flex flex-col items-center">
        <img
        src={item.image} 
        alt={item.title} 
        className="w-52 h-52"
        />
        <h3 className="text-2xl text-red-600 m-2  font-bold text-center">{item.title}</h3>
        <h3 className="text-xl text-red-600">{item.price}€</h3>
        
        </div>
       ))
     }
     </div>
     </div>
    )
}

