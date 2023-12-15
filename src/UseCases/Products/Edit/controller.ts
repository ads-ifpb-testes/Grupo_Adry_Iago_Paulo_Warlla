import { Request, Response } from "express"
import { EditProductUserCase } from "./useCase"


export class EditProductController {

    constructor(private useCase:EditProductUserCase){}

    async handle(req:Request, response:Response){
        let result = await this.useCase.execute(req.body)
        if(result.has_error) return response.status(400).json(result)
        return response.status(200).json(result)
    }
}