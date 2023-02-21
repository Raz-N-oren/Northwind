import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import ProductModel from "../../../Models/ProductModel";
import productsService from "../../../Services/ProductsService";
import appConfig from "../../../Utils/config";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductDetails.css";

function ProductDetails(): JSX.Element {

    const params = useParams();
    const [product, setProduct] = useState<ProductModel>();
    // const [product, setProduct] = useState<ProductModel>(new ProductModel());


    useEffect(() => {
        const id = +params.prodId; //prodId must be the same name as declare in the routing!
        productsService.getOneProduct(id)
            .then(p => setProduct(p))
            .catch(err => alert("Error: " + err.message))
    }, [])

    return (
        <div className="ProductDetails">

            {/* <ProductCard key={product?.id} product={product && product}></ProductCard> */}

            <h2>Product Details</h2>
            <h3>Name: {product && product.name}</h3>
            <h3>Price: {product?.price}</h3>
            <h3>Stock: {product?.stock}</h3>

            <img src={appConfig.productsImagesUrl + product?.imageName} alt={product?.name} />
            <br />
            <br />

            <NavLink to="/products">
                Back
            </NavLink>

        </div>
    );
}

export default ProductDetails;
