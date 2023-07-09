import {SideBarItem} from "../components/SideBarItem.tsx";
import {CardProduct} from "../components";
import {useEffect} from "react";
import { useLocation } from "react-router-dom";
import { useGetArticleByCategoryQuery } from "../app/api/productApi.ts";

export const BirthDay=()=>{
    const location = useLocation();
   const {data, isLoading}= useGetArticleByCategoryQuery(location.state.id)


    useEffect(()=>{
        window.scrollTo(0,0)
    },[]);
  return (
      <>
      <div className="flex">
        <div className="drawer w-72 bg-[#fce] h-screen ml-10">
        <h2 className="text-2xl text-red-600 ml-4 mt-3">Filtrer </h2>
           <SideBarItem sousTitre={"Croissant"}  handleChange={()=>{}}/>
           <SideBarItem sousTitre={"Décroissant"}  handleChange={()=>{}}/>
          <SideBarItem sousTitre={"Les mieux notés"}  handleChange={()=>{}}/>
          <SideBarItem sousTitre={"Les plus vendus"}  handleChange={()=>{}}/>
          <SideBarItem sousTitre={"Nouveau arrivage"}  handleChange={()=>{}}/>
          <SideBarItem sousTitre={"Saison"}  handleChange={()=>{}}/>
      </div>
       {
        data?.length === 0 && <div className=" flex justify-center items-center self-center text-4xl w-full">Pas d'articles pour cette catégorie</div>
       }
         {
            isLoading ? <div>Loading......</div>
            :<div className="contain flex flex-wrap m-10 gap-x-24 gap-y-10">
            {
                data?.map((item:any,index:number)=>(
                    <CardProduct item={item} index={index} />
                ))
            }
        </div>
         }
      </div>
          <div style={{border:"0.1px solid #fce"}} />
      </>
    )
}