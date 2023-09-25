import {useNavigate} from "react-router-dom";


const Profil = () => {
  const navigate=useNavigate()
  return (
    <div className='h-screen flex flex-col   items-center'>
      <button onClick={()=>{
        sessionStorage.clear();
        navigate("/")
      }} className="inline-block w-[250px] absolute right-2  py-4 px-6 mb-6 text-center text-lg leading-6 text-white font-extrabold bg-[#e54] hover:bg-[#e54] border-3 border-indigo-900 shadow rounded-xl transition duration-200">Se déconnecter</button>
      <div className="">
        <h2 className={"text-4xl text-center m-5 text-bold text-red-600 italic mt-24"}>Vos commandes s'afficheront ici</h2>
      </div>
    </div>
  )
}

export default Profil
