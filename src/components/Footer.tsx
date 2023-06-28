
import {motion} from "framer-motion";
import {AiOutlineInstagram, AiOutlineMail, BsTelephone, CiFacebook, CiTwitter, RiMapPinLine} from "react-icons/all";
import { useGetCategoriesQuery } from "../app/api/productApi";

export const Footer = () => {
  const categories:{name:string, _id:string , path:string, image: string}[] = [];
  const {data}= useGetCategoriesQuery('')
   if(data){
    data.map((category: {name:string, _id:string , path:string, image: string}) => categories.push({...category,path: category.name ==="Coup De Coeur" ? '/amour' : `/${category.name}`}))
   }
 
  return (
    <motion.div className="flex flex-row justify-around mt-10 footer">
     <motion.div className="flex flex-col "
     initial={{y:100, opacity:0,display:"hidden",}}
     whileInView={{y:0,opacity:1,transition:{type:'tween',duration:1},display:"block",}}
     >
       <h2 className="text-2xl font-bold ml-4">Cordonnées</h2>
       <div className="flex items-center mt-3">
         <RiMapPinLine size={30} className="m-2 text-red-600" />
         <h3>1 rue de mureaux , 78000 Mureaux</h3>
       </div>
         <div className="flex items-center">
             <BsTelephone size={25} className="m-3 text-red-600" />
             <h3>01211111000</h3>
         </div>
         <div className="flex items-center">
             <AiOutlineMail size={25} className="m-3 text-red-600" />
             <h3>fleur@-boutique.com</h3>
         </div>
         <div className="flex m-5">
             <div className="bg-rose-600 m-2 text-white rounded-full w-10 h-10 flex items-center justify-center">
                 <AiOutlineInstagram size={20} />
             </div>
             <div className="bg-rose-600 m-2 text-white rounded-full w-10 h-10 flex items-center justify-center">
             <CiTwitter size={20}/>
             </div>
             <div className="bg-rose-600 m-2 text-white rounded-full w-10 h-10 flex items-center justify-center">
             <CiFacebook size={20}/>
             </div>
         </div>
     </motion.div>
      <motion.div className="flex flex-col"
      initial={{y:100, opacity:0,display:"hidden",}}
      whileInView={{y:0,opacity:1,transition:{type:'tween',duration:1},display:"block",}}
      >
        <h2 className="text-2xl font-bold">Boutique</h2>
          <div className="flex items-center mt-3">
          <a href="">Mentions légales</a>
          </div>
          <div className="flex items-center mt-3">
          <a href="">Conditions générales</a>
          </div>
          <div className="flex items-center mt-3">
          <a href="">Protection des données Personelles</a>
          </div>
          <div className="flex items-center mt-3">
          <a href="">A propos</a>
          </div>
      </motion.div>
      <motion.div className="flex flex-col"
      initial={{y:100, opacity:0,display:"hidden",}}
      whileInView={{y:0,opacity:1,transition:{type:'tween',duration:1},display:"block",}}
      >
        <h2 className="text-2xl font-bold -ml-2">Catégories</h2>
          {
          categories?.map((category)=><div className="flex items-center mt-3" key={category.name}>
              <a href="" >{category.name}</a>
          </div>
          )
          }
      </motion.div>
        <motion.div
         initial={{y:100, opacity:0,display:"hidden",}}
         whileInView={{y:0,opacity:1,transition:{type:'tween',duration:1},display:"block",}}
        >
            <h2 className="text-2xl font-bold -ml-2">Blog</h2>
            <div className="w-48 flex flex-wrap gap-4">
            {
            categories.map((category)=><div className="flex items-center mt-2 " key={category.name}>
                <a href="" className="w-20 h-10 " >
                  <img src={category.image} alt={""} className=""/>
                </a>
                </div>
            )
            }</div>
        </motion.div>
    </motion.div>
  )
}