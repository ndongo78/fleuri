import { deco2 } from "./assets"
import { About, Category, Footer, Header, Hero , NewLetters, NewProduct} from "./components"
import { motion } from "framer-motion"

const  App=()=> {

  return (
    < >
    <Header />
    <Hero />
    <NewProduct />
    <About />
     <motion.img initial={{opacity:0,x:-100}} whileInView={{opacity:1,x:0,rotate:90,transition:{duration:1}}} src={deco2} alt="" className="w-52  absolute rotate-90 -left-5 "  />
    <Category />
    <motion.img src={deco2} alt=""  initial={{opacity:0,x:-100}} whileInView={{opacity:1,x:0,rotate:180,transition:{duration:1}}} className="w-52  absolute  -rotate-180 -right-6"  />
     <div>
     <NewLetters />
     </div>
     <div>
     <Footer />
     </div>
    </>
  )
}

export default App
