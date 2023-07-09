import {SideBarItem} from "../components/SideBarItem.tsx";
import {CardProduct} from "../components";
import {useEffect, useState} from "react";
import { useLocation } from "react-router-dom";
import { useGetArticleByCategoryQuery } from "../app/api/productApi.ts";
import { SingleProduct } from "../types/index.ts";
import { AiOutlineMenu } from "react-icons/ai";

export const BirthDay=()=>{
    const location = useLocation();
    const [sortedData, setSortedData] = useState<SingleProduct[]>([]);
    const [selectedFilter, setSelectedFilter] = useState<string>('');
    const [show, setshow] = useState<boolean>(false);
    const filters=[
        {name: 'Croissant'},
        {name: 'Décroissant'},
        {name: 'Les mieux notés'},
        {name: 'Les plus populaires'},
        {name: 'Nouveau arrivage'},
        {name: 'Saison'},
    ]

   const {data, isLoading}= useGetArticleByCategoryQuery(location.state.id)

   useEffect(() => {
    if(!isLoading){
       setSortedData([...data]);
    
    }
   }, [isLoading])

    useEffect(()=>{
        window.scrollTo(0,0)
    },[]);

    const handleChange = (val: string, e: any) => {
        const shouldSort = e.target.checked; // Vérifier si la case à cocher est cochée
    
        if (shouldSort) {
          const newArr = [...data];
          if (val === 'Croissant') {
            newArr.sort((a: any, b: any) => a.price - b.price);
          } else if (val === 'Décroissant') {
            newArr.sort((a: any, b: any) => b.price - a.price);
          }
          setSortedData(newArr);
          setSelectedFilter(val); // Mettre à jour le filtre sélectionné
        } else {
          setSortedData([...data]);
          setSelectedFilter(''); // Réinitialiser le filtre sélectionné
        }
      };

  return (
      <>
      <div className="flex">
      <div className="relative">
             <AiOutlineMenu onClick={()=>setshow(!show)}  className='visible ml-5 font-bold  p-4 shadow-lg w-14 h-14 rounded-full m-4 bg-[#e8b5ec]  sm:invisible' size={30} />
             {
                show &&(
                    <div className={` absolute bg-[#fce] max-h-screen  z-50 rounded-lg left-10  `}>
                    <h2 className="text-2xl text-red-600 ml-4 mt-3">Trier par </h2>
                    {
                        filters.map(({name}) => <SideBarItem
                         sousTitre={name} key={name} 
                           handleChange={(e)=>handleChange(name,e)}
                           checked={name === selectedFilter}
                           />)
                    }
                    </div>
                )
             }
               <div className={`drawer sm:w-72 sm:bg-[#fce] sm:h-screen sm:ml-10  sm:relative`}>
                    <h2 className="text-2xl text-red-600 ml-4 mt-3">Trier par </h2>
                    {
                        filters.map(({name}) => <SideBarItem
                         sousTitre={name} key={name} 
                           handleChange={(e)=>handleChange(name,e)}
                           checked={name === selectedFilter}
                           />)
                    }
                    </div>
            </div>
       {
        data?.length === 0 && <div className=" flex justify-center items-center self-center text-4xl w-full">Pas d'articles pour cette catégorie</div>
       }
         {
            isLoading ? <div>Loading......</div>
            :<div className="contain flex flex-wrap m-10 gap-x-24 gap-y-10">
            {
                sortedData?.map((item:any,index:number)=>(
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