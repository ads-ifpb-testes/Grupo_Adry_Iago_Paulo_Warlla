
import { Response, Request } from "express";
import { LoginUserUseCase } from "./useCase";
import { ResponseModel } from "../../../util/ResponseModel";

export class LoginUserController {

    constructor(private useCase:LoginUserUseCase){}

    async handle(req:Request, response:Response){
   
        let result = await this.useCase.execute(req.body)
        if(result.has_error) return response.status(400).json(result)
        return response.status(200).json(new ResponseModel("Usuário logdao com sucesso!", false))
    }
}