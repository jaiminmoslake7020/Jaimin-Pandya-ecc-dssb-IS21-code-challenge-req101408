import { NextFunction, Request, Response } from "express"
import {deleteProduct, getProductById, getProducts, saveProduct, updateProduct} from '../services/product';
import {CreateProductInput, ReadProductInput, UpdateProductInput} from '../schema/product.schema';


export const listProductHandler = async(request: Request, response: Response, next: NextFunction)=> {
    try{
        const products = await getProducts("1", {});
        return response.json(products);
    } catch (e) {
        return response.json({
            status: 500,
            message: "Failed to list products."
        });
    }
}

export const getProductHandler = async(request: Request<ReadProductInput['params']>, response: Response, next: NextFunction)=> {
    try{
        const id = request.params.id
        return response.json(await getProductById(id));
    } catch (e) {
        return response.json({
            status: 500,
            message: "Failed to get product."
        });
    }
}

export const createProductHandler = async(request: Request<{}, {}, CreateProductInput["body"]>, response: Response, next: NextFunction)=> {
    try{
        return response.json(await saveProduct(request));
    } catch (e) {
        return response.json({
            status: 500,
            message: "Failed to create product."
        });
    }
}

export const updateProductHandler = async(request: Request<UpdateProductInput['params'],{}, UpdateProductInput['body']>, response: Response, next: NextFunction) => {
    try{
        return response.json(await updateProduct(request));
    } catch (e) {
        return response.json({
            status: 500,
            message: "Failed to update product."
        });
    }
}

export const deleteProductHandler = async(request: Request, response: Response, next: NextFunction)=> {
    try{
        const products = await deleteProduct(request);
        return response.json(products);
    } catch (e) {
        return response.json({
            status: 500,
            message: "Failed to delete product."
        });
    }
}

