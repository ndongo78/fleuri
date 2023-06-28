import { motion } from "framer-motion"
import {useNavigate } from "react-router-dom"
import { useGetCategoriesQuery } from "../app/api/productApi"

export const Category=()=>{
  const navigate=useNavigate()
  const categories:{name:string, _id:string , path:string, image: string}[] = [];
  const {data, isLoading}= useGetCategoriesQuery('')
   if(data){
    data.map((category: {name:string, _id:string , path:string, image: string}) => categories.push({...category,path: category.name ==="Coup De Coeur" ? '/amour' : `/${category.name}`}))
   }
 
  return(
     <div className="newProduct m-40  md:flex md:flex-col md:self-center md:justify-self-center sm:flex flex-col">
      <div className=" flex justify-between">
     <motion.h2
         initial={{y:50, opacity:0}}
         whileInView={{y:0,opacity:1,transition:{type:'tween',duration:1}}}
         className="lg:text-5xl m-8 text-red-600 xs:m-0 text-3xl mb-5">Chaque évenement de la vie avec son bouquet de fleur </motion.h2>
     <div className="button">
      {/* <button className=" border text-red-700 border-red-600 p-3 w-36 font-bold hover:bg-[#eb86b8]">Voir plus</button> */}
     </div>
      </div>
     {
      isLoading ? <p>Loading</p>
      :<div className="md:flex md:flex-row md:items-center sm:flex-col  flex-wrap gap-2 self-center mt-10">
      {
        categories.map((item,index:number)=>(
        <motion.div 
        className="m-2 cursor-pointer w-[250px] shadow
        rounded bg-[#fdd] justify-center flex flex-col items-center place-content-center"
        initial={{y:200, opacity:0,display:"hidden",}}
        whileInView={{y:0,opacity:1,transition:{type:'tween',duration:1 * index,},display:"block",}}
        onClick={()=>navigate(item.path, {state: {id: item._id}})}
        key={index}
        >
         <img
         src={item.image} 
         alt={item.name} 
         className="w-[90%] h-64 bg-cover object-fill m-3 hover:scale-95"
         />
         <h3 className="text-2xl text-red-600 m-3 font-bold text-center">{item.name}</h3>
        
         </motion.div>
        ))
      }
      </div>
     }
     </div>
    )
}


