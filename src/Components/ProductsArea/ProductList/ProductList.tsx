import { useEffect, useState } from "react";
import ProductModel from "../../../Models/ProductModel";
import productsService from "../../../Services/ProductsService";
import "./ProductList.css";

function ProductList(): JSX.Element {
    const [products, setProduct] = useState<ProductModel[]>([]);

    useEffect(() => {
        productsService.getAllProducts()
            .then(products =>  setProduct(products)
            )
            .catch(err => alert(err.message))
    }, []);

    return (
        <div className="ProductList">
            <p>{products.map(p=> <span className="Box" key={p.id}>{p.name} | {p.price}₪</span>)}</p>
        </div>
    );
}

export default ProductList;
