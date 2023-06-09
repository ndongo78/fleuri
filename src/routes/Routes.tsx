import {Route, Routes} from "react-router-dom"
import {Home} from "../pages/Home.tsx";
import {AllProducts, BirthDay} from "../pages";
import { Login } from "../pages/Login.tsx";
import { Cart } from "../pages/Cart.tsx";
import Profil from "../pages/Profil.tsx";
import { Register } from "../pages/Register.tsx";
import { Contact } from "../pages/Contact.tsx";
import { Detail } from "../pages/Detail.tsx";






export function RootRoutes() {
    return (
        <Routes>
        <Route  path="/" element={<Home />}  />
        <Route  path="/products" element={<AllProducts />}  />
        <Route  path="/anniversaire" element={<BirthDay />}  />
        <Route  path="/deuil" element={<BirthDay />}  />
        <Route  path="/Evenements" element={<BirthDay />}  />
        <Route  path="/Mariage" element={<BirthDay />}  />
        <Route  path="/amour" element={<BirthDay />}  />
        <Route  path="/login" element={<Login />}  />
        <Route  path="/register" element={<Register />}  />
        <Route  path="/cart" element={<Cart />}  />
        <Route  path="/profil" element={<Profil />}  />
        <Route  path="/contact" element={<Contact />}  />
        <Route  path="/detail/:id" element={<Detail />}  />
        </Routes>
    );
}