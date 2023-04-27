import {categoriesArray} from "../constants"


export const Category=()=>{
  return(
     <div className="newProduct m-40 flex flex-col self-center justify-self-center ">
      <div className=" flex justify-between">
     <h2 className="text-5xl m-8 text-red-600 ">Nos Catégories </h2> 
     <div className="button">
      {/* <button className=" border text-red-700 border-red-600 p-3 w-36 font-bold hover:bg-[#eb86b8]">Voir plus</button> */}
     </div>
      </div>
     <div className="md:flex md:flex-row md:items-center sm:flex-col  flex-wrap gap-2">
     {
       categoriesArray.map((item)=>(
       <div className="m-2 cursor-pointer w-[300px] shadow rounded bg-[#fdd] justify-center flex flex-col items-center">
        <img
        src={item.image} 
        alt={item.title} 
        className="w-[90%] h-64 bg-cover object-fill mt-2"
        />
        <h3 className="text-2xl text-red-600 m-3 font-bold">{item.title}</h3>
       
        </div>
       ))
     }
     </div>
     </div>
    )
}


