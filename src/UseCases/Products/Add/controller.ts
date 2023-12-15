import { AddProductUserCase } from "./useCase"
import { Request, Response } from "express"


export class AddProductController {

    constructor(private useCase:AddProductUserCase){}

    async handle(req:Request, response:Response){
        let result = await this.useCase.execute(req.body)
        if(result.has_error) return response.status(400).json(result)
        return response.status(200).json(result)
    }
}