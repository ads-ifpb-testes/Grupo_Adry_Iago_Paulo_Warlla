import { ResponseModel } from "../../../util/ResponseModel"
import { AddUserUseCase } from "./useCase"
import { Request, Response } from "express"


export class AddUserController {

    constructor(private useCase:AddUserUseCase){}

    async handle(req:Request, response:Response){
        let result = await this.useCase.execute(req.body)
        if(result.has_error) return response.status(400).json(result)
        return response.status(200).json(result)
    }
}