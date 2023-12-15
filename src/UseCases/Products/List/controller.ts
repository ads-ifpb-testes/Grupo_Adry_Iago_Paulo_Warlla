
import { Request, Response } from "express"
import { ListProductUserCase } from "./useCase"


export class ListProductControler {

    constructor(private useCase:ListProductUserCase){}

    async handle(req:Request, response:Response){
        let result = await this.useCase.execute()
        if(result.has_error) return response.status(400).json(result)
        return response.status(200).json(result)
    }
}