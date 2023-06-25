import {Route, Routes} from "react-router-dom"
import {Home} from "../pages/Home.tsx";
import {AllProducts, BirthDay} from "../pages";
import { Login } from "../pages/Login.tsx";
import { Cart } from "../pages/Cart.tsx";
import Profil from "../pages/Profil.tsx";






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
        <Route  path="/login" element={<Login />}  />
        <Route  path="/cart" element={<Cart />}  />
        <Route  path="/profil" element={<Profil />}  />
        </Routes>
    );
}