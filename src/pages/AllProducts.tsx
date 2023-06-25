import {SideBarItem} from "../components/SideBarItem.tsx";
import {newProductsArray} from "../constants";
import {CardProduct} from "../components";
import { useGetProductsQuery } from "../app/api/productApi.ts";

export const AllProducts=()=>{
    const shuffle = (arr:any) => [...arr].sort(() => Math.random() - 0.5);
    const newList = shuffle(newProductsArray);
    const {data,isLoading}= useGetProductsQuery('')

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
                isLoading ? <p>Loading...</p>
                :<div className="contain flex flex-wrap m-10 gap-x-24 gap-y-10">
                {
                    data.map((item:any,index:number)=>(
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