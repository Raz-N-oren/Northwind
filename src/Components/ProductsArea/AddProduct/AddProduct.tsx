import { SyntheticEvent } from "react";
import { useForm } from "react-hook-form";
import ProductModel from "../../../Models/ProductModel";
import "./AddProduct.css";

function AddProduct(): JSX.Element {

    const { register, handleSubmit } = useForm<ProductModel>();

    function send(product: ProductModel){
        console.log(product);
    }

    return (
        <div className="AddProduct Box">

            <form onSubmit={handleSubmit(send)}>
                <h2>Add Product</h2>

                <label>Name: </label>
                <input type="text" {...register("name")}/>

                <label>Price: </label>
                <input type="number" {...register("price")}/>

                <label>Stock: </label>
                <input type="number" {...register("stock")}/>

                <button>Add Product</button>
            </form>

        </div>
    );
}

export default AddProduct;
