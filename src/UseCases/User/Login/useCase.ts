import { IUserRepository } from "../../../Repository/interface/IUserRepository";
import { ResponseModel } from "../../../util/ResponseModel";
import { LoginUser, LoginUserDTO } from "./model";
import bcrypt from 'bcrypt'


export class LoginUserUseCase {

    constructor(private repository:IUserRepository){}

    async execute(data:LoginUser){
        let typeCheck:any = LoginUserDTO.safeParse(data)
        
        if(!typeCheck.success) return await new ResponseModel("E-mail ou senha em formato inválido", true, typeCheck.error.errors );


        return await this.repository.login(typeCheck.data);
    }
}