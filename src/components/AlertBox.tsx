import { useNavigate } from 'react-router-dom';

type Pros ={
    setIsSuccess: (t:boolean)=>void;
}

export const AlertBox = ({setIsSuccess}:Pros) => {
    const navigate=useNavigate()
  return (
        <div className="w-full md:w-3/3 mx-auto flex justify-center items-center  fixed inset-0 bg-black bg-opacity-70 z-50">
    <div className="flex flex-col p-5 rounded-lg shadow bg-white">
        <div className="flex">
        <div>
            <svg className="w-6 h-6 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"/></svg>
        </div>
        <div className="ml-3">
            <h2 className="font-semibold text-gray-800 text-2xl">Information</h2>
            <p className="mt-2 text-xl text-gray-600 leading-relaxed ">Votre compte est créer avec succes . Utilisez vos identifiants pour se connecter</p>
        </div>
        </div>
        <div className="flex items-center mt-5 mb-3">
        <button 
        onClick={()=>{
            setIsSuccess(false)
            navigate("/login")
        }}
        className="flex-1 px-4 py-2  hover:bg-green-400 text-gray-800 text-xl bg-green-400 font-medium rounded-md">
            Se connecter
        </button>
        </div>
    </div>
    </div>
  )
}
