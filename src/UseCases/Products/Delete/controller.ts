
import { Request, Response } from "express"
import { DeleteProductUseCase } from "./useCase"


export class DeleteProductController {

    constructor(private useCase:DeleteProductUseCase){}

    async handle(req:Request, response:Response){
        let result = await this.useCase.execute(req.body)
        if(result.has_error) return response.status(400).json(result)
        return response.status(200).json(result)
    }
}