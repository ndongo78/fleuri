import {Route, Routes} from "react-router-dom"
import {Home} from "../Home.tsx";






export function RootRoutes() {
    return (
        <Routes>
        <Route  path="/" element={<Home />}  />
        </Routes>
    );
};