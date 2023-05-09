import {Route, Routes} from "react-router-dom"
import {Home} from "../pages/Home.tsx";
import {AllProducts, BirthDay} from "../pages";






export function RootRoutes() {
    return (
        <Routes>
        <Route  path="/" element={<Home />}  />
        <Route  path="/products" element={<AllProducts />}  />
        <Route  path="/anniversaire" element={<BirthDay />}  />
        <Route  path="/deuil" element={<BirthDay />}  />
        <Route  path="/évenement" element={<BirthDay />}  />
        <Route  path="/mariage" element={<BirthDay />}  />
        <Route  path="/love" element={<BirthDay />}  />
        </Routes>
    );
}