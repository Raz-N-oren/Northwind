import axios from "axios";
import ProductModel from "../Models/ProductModel";
import appConfig from "../Utils/config";

class ProductsService {

    //Get all products
    public async getAllProducts(): Promise<ProductModel[]> {
        // AJAX async Request
        const response = await axios.get<ProductModel[]>(appConfig.productsUrl);
        //Extract products;
        const products = response.data;

        //Return products
        return products;
    }
}

const productsService = new ProductsService();

export default productsService;