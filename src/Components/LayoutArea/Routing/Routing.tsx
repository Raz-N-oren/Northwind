import { Navigate, Route, Routes } from "react-router-dom";
import About from "../../AboutArea/About/About";
import Home from "../../HomeArea/Home/Home";
import AddProduct from "../../ProductsArea/AddProduct/AddProduct";
import ProductDetails from "../../ProductsArea/ProductDetails/ProductDetails";
import ProductList from "../../ProductsArea/ProductList/ProductList";
import PageNotFound from "../PageNotFound/PageNotFound";
import "./Routing.css";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
            <Routes>

                {/* Home */}
                <Route path="/home" element={<Home />}/>

                {/* Product List */}
                <Route path="/products" element={<ProductList />}/>

                {/* Product Details */}
                <Route path="/products/Details/:prodId" element={<ProductDetails />}/>

                {/* Add Details */}
                <Route path="/products/new" element={<AddProduct />}/>

                {/* About */}
                <Route path="/about" element={<About />}/>

                {/* Default Route */}
                <Route path="/" element={<Navigate to="/home" />}/>

                {/* Page Not Found */}
                <Route path="*" element={<PageNotFound />}/>
            </Routes>
        </div>
    );
}

export default Routing;
