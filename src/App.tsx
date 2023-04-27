import { deco2 } from "./assets"
import { About, Category, Header, Hero , NewProduct} from "./components"


const  App=()=> {

  return (
    < >
    <Header />
    <Hero />
    <NewProduct />
    <About />
     <img src={deco2} alt="" className="w-52  absolute rotate-90 -left-5 "  />
    <Category />
    </>
  )
}

export default App
