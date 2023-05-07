import {Route, Routes} from "react-router-dom"
import {Home} from "../Home.tsx";
import {BirthDay} from "../pages";






export function RootRoutes() {
    return (
        <Routes>
        <Route  path="/" element={<Home />}  />
        <Route  path="/anniversaire" element={<BirthDay />}  />
        </Routes>
    );
};