import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { NavBarComponent } from "../components";
import { Home, Ofertas, Products, ProductDetail, Cart } from "../pages";

export const MainRoutes = () => {

    return (
        <Router>
            <NavBarComponent />
            <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route exact path="/estrenos" element={<Ofertas />}/>
                <Route exact path="/peliculas" element={<Products />}/>
                <Route exact path="/peliculas/:productId" element={<ProductDetail />}/>
                <Route exact path="/cart" element={<Cart />}/>
            </Routes>
        </Router>
    )
};