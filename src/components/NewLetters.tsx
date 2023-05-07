
import {motion} from "framer-motion";

export const NewLetters = () => {
  return (
    <div className=" flex items-center self-center justify-center bg-[#fdd] w-[100%] h-40">
      <motion.div
          className="w-50 mx-3"
          initial={{x:-150, opacity:0}}
          whileInView={{x:0,opacity:1,transition:{type:'tween',duration:1}}}
      >
        <h2 className="text-4xl font-bold text-red-600">S'inscrire aux bon plan</h2>
      </motion.div>
      <motion.div
          initial={{x:400, opacity:0}}
          whileInView={{x:0,opacity:1,transition:{type:'tween',duration:1}}}
      >
        <form className=" flex ml-4">
          <div className="mb-4 flex items-center">
            <label className="block text-gray-700 text-sm font-bold mb-2 mr-3" htmlFor="username"></label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-white focus:outline-none focus:shadow-outline"
                id="username" type="text" placeholder="Nom" />
          </div>
          <div className="mb-4 flex items-center">
            <label className="block text-gray-700 text-sm font-bold mb-2 mr-3" htmlFor="username"></label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-white focus:outline-none focus:shadow-outline"
                id="username" type="text" placeholder="Email" />
          </div>
          <div className="">
            <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 ml-4 rounded focus:outline-none focus:shadow-outline"
                type="button">
              Envoyer
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  )
}
