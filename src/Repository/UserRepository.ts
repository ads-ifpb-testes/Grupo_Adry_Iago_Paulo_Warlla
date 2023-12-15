import { AddUserModel } from "../UseCases/User/Add/model";
import { LoginUser } from "../UseCases/User/Login/model";
import { prisma } from "../database";
import { ResponseModel } from "../util/ResponseModel";
import { IUserRepository } from "./interface/IUserRepository";

export class UserRepository implements IUserRepository{
    async login(data:LoginUser): Promise<ResponseModel> {
        try {
            let result = await prisma.user.findUnique({
                where:{
                    email:data.email
                }
            })
            if(result?.email != data.email || result.password != data.password){
                return new ResponseModel("E-mail ou senha inválidos", true)
            }else {
                return new ResponseModel("Usuário logado com sucesso!", false)
            }
        } catch (error) {
            return new ResponseModel("E-mail ou senha inválidos", true)
        }
    }
    async add(data:AddUserModel):Promise<ResponseModel>{
        try {
            let result = await prisma.user.create({
                data:{
                    ...data
                }
            })
            return new ResponseModel("Usuário criado com sucesso!", false)
        } catch (error) {
            return new ResponseModel("Houve um problema ao cadastrar o usuário!", true)
        }
    }

}