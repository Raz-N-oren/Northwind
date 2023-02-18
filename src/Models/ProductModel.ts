class ProductModel {
    // public id: number =0;
    // public id: number | undefined ;
    // public id?: number; //optional
    // public id!: number; // can get also undefined

    public id: number;     // "strictNullChecks": false, inside tsconfig.json
    public name: string;
    public price: number;
    public stock: number;
    public imageName: string;
}

export default ProductModel;