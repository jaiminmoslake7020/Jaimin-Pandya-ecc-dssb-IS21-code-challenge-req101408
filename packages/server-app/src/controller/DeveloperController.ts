import { Request, Response } from "express"
import {saveDeveloper, getDevelopers} from '../services/developer';
import {CreateDeveloperInput} from '../schema/developer.schema';


export const listDeveloperHandler = async(request: Request, response: Response)=> {
    try{
        const products = await getDevelopers();
        return response.json(products);
    } catch (e) {
        return response.json({
            status: 500,
            message: "Failed to list developers."
        });
    }
}

export const createDeveloperHandler = async(request: Request<{}, {}, CreateDeveloperInput["body"]>, response: Response)=> {
    try{
        return response.json(await saveDeveloper(request));
    } catch (e) {
        return response.json({
            status: 500,
            message: "Failed to create developer."
        });
    }
}
