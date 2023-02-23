import axios from "axios";
import ProductModel from "../Models/ProductModel";
import appConfig from "../Utils/config";

class ProductsService {

    //REST API Methods: --->
    //GET      Get data from server
    //POST     Add new data to servers
    //PUT      Update full data in server -- Sending all properties 
    //PATCH    Update partial data in server-- Sending some properties 
    //DELETE   Delete data in server

    //Get all products
    public async getAllProducts(): Promise<ProductModel[]> {
        // AJAX async Request
        const response = await axios.get<ProductModel[]>(appConfig.productsUrl);
        //Extract products;
        const products = response.data;

        //Return products
        return products;
    }

    //Get one product
    public async getOneProduct(prodId: number): Promise<ProductModel> {

        // AJAX async Request
        const response = await axios.get<ProductModel>(appConfig.productsUrl + prodId);

        //Extract one product;
        const product = response.data;

        //Return one product
        return product;
    }


    // Add product: 
    public async addProduct(product: ProductModel): Promise<void> {

        // AJAX Request - Sending a new product to add, receiving back the added product - after adding to the database:

        // const response = await axios.post<ProductModel>(appConfig.productsUrl, product); // Sending object without files.

        const myFormData = new FormData(); // Can contain strings and / or files.
        myFormData.append("name", product.name);
        myFormData.append("price", product.price.toString());
        myFormData.append("stock", product.stock.toString());
        myFormData.append("image", product.image[0]); // image = FileList, image[0] = File

        // Sending object with file (the image):
        const response = await axios.post<ProductModel>(appConfig.productsUrl, myFormData); // Sending object without files.

        // Extract the added product: 
        const addedProduct = response.data;

    }
}

const productsService = new ProductsService();

export default productsService;