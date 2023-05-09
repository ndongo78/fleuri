import {SideBarItem} from "../components/SideBarItem.tsx";
import {newProductsArray} from "../constants";
import {CardProduct} from "../components";
import {useEffect} from "react";

export const BirthDay=()=>{
    const shuffle = (arr:any) => [...arr].sort(() => Math.random() - 0.5);
    const newList = shuffle(newProductsArray);

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
        <div className="contain flex flex-wrap m-10 gap-x-24 gap-y-10">
            {
                newList.map((item,index)=>(
                    <CardProduct item={item} index={index} />
                ))
            }
        </div>
      </div>
          <div style={{border:"0.1px solid #fce"}} />
      </>
    )
}