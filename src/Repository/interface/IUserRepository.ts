import { AddUserModel } from "../../UseCases/User/Add/model";
import { LoginUser } from "../../UseCases/User/Login/model";
import { ResponseModel } from "../../util/ResponseModel";

export interface IUserRepository {


    login(data:LoginUser):Promise<ResponseModel>
    add(data:AddUserModel):Promise<ResponseModel>
}