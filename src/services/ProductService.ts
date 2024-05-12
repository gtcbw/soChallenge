import type { Product } from "@/models/Product";
import product from './ProductMock.json';

export class ProductService {
    public getProduct(id: number): Product {
        return product as Product;
    }
}