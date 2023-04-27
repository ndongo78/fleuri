import { image6, image7 } from '../assets'

export const About = () => {
  return (
    <div className=' flex m-10 justify-evenly relative'>
            <div className=" w-96 ml-2 mt-32">
            <h3 className=' text-4xl font-bold text-red-600 m-3 '>Tulipa gesneriana</h3>
               <p className='m-3 font-semibold'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium error in, molestiae fuga aut laboriosam nulla, deserunt, nam eum itaque possimus corrupti accusamus repudiandae reprehenderit cumque labore aliquid veritatis nihil?
               </p>
            </div>
            <div className="">
                <div className=" bg-slate-200 mt-24 w-72 h-96 flex items-center justify-center border-white border-8">
                <img src={image7} className=' w-72 h-96' alt=""  />
                </div>
                <div className='w-52 h-52 absolute rotate-12   right-0 -bottom-11 bg-slate-200  border-white border-8 '>
                <img src={image6} className=' w-52 h-52 absolute  ' alt=""  />
                </div>
            </div>
    </div>
  )
}

