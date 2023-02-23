import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import ProductModel from "../../../Models/ProductModel";
import productsService from "../../../Services/ProductsService";
import "./AddProduct.css";

function AddProduct(): JSX.Element {

    // useVerifyLoggedIn();

    const { register, handleSubmit, formState } = useForm<ProductModel>();
    const navigate = useNavigate();

    async function send(product: ProductModel) {
        try {
            await productsService.addProduct(product);
            navigate("/products");
        }
        catch (err: any) {
            console.log("Error: " + err.message);

        }
    }

    return (
        <div className="AddProduct Box">

            <form onSubmit={handleSubmit(send)}>

                <h2>Add Product</h2>

                <label>Name: </label>
                <input type="text" {...register("name")} />

                <label>Price: </label>
                <input type="number" {...register("price")} />

                <label>Stock: </label>
                <input type="number" {...register("stock")} />

                <label>Image: </label>
                <input type="file" accept="image/*" {...register("image")} />

                <button>Add</button>

            </form>

        </div>
    );
}

export default AddProduct;
