import {  Footer, Header, NewLetters} from "./components"
import {RootRoutes} from "./routes/Routes.tsx";
import "react-multi-carousel/lib/styles.css";
const  App=()=> {

  return (
    < >
    <Header />
     <RootRoutes />
     <div>
     <Footer />
     </div>
    </>
  )
}

export default App
