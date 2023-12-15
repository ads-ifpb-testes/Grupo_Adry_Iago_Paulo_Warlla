import { IUserRepository } from "../../../Repository/interface/IUserRepository";
import { ResponseModel } from "../../../util/ResponseModel";
import { AddUserDTO, AddUserModel } from "./model";

export class AddUserUseCase {

    constructor(private repository:IUserRepository){}

    async execute(data:AddUserModel){
        let typeCheck:any = AddUserDTO.safeParse(data)
        
        if(!typeCheck.success) return await new ResponseModel("Um ou mais campos são inválidos!", true, typeCheck.error.errors );

        return await this.repository.add(typeCheck.data);
    }
}