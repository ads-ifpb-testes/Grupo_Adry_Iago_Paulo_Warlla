
import { Request, Response } from "express"
import { FetchProductUseCase } from "./useCase"



export class FetchProductController {

    constructor(private useCase:FetchProductUseCase){}

    async handle(req:Request, response:Response){
        let result = await this.useCase.execute(req.params.id)
        if(result.has_error) return response.status(400).json(result)
        return response.status(200).json(result)
    }
}