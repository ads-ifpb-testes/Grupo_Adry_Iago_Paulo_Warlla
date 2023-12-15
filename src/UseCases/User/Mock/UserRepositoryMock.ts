import { IUserRepository } from "../../../Repository/interface/IUserRepository";
import { ResponseModel } from "../../../util/ResponseModel";
import { AddUserModel } from "../Add/model";

interface User {
    id:string
    email: string;
    password: string;
    name: string;
    state: string;
    street: string;
    homeNumber: string;
}
export class UserRepositoryMock implements IUserRepository {
    private users: Array<User> = [];
    async login(data: { email: string; password: string; }): Promise<ResponseModel> {
        let isLogged = false
        this.users.forEach(el => {
            if(el.email == data.email && el.password == data.password) isLogged = true
        })
        if(isLogged) return await new ResponseModel('Usuário logado com sucesso!', false)
        return new ResponseModel('E-mail ou senha inválidos', true)
    }
    async add(data: AddUserModel): Promise<ResponseModel> {
        
        try {
            if(!data.name) return await new ResponseModel('expected field name', true)
            if(!data.email) return await new ResponseModel('expected field email', true)
            if(!data.state) return await new ResponseModel('expected field state', true)
            if(!data.street) return await new ResponseModel('expected field street', true)
            if(!data.homeNumber) return await new ResponseModel('expected field homeNumber', true)
            if(!data.password) return await new ResponseModel('expected field password', true)
            let EmailIsInUse = false
            this.users.forEach(el =>{
                if(el.email == data.email) EmailIsInUse = true
            })
            if(EmailIsInUse) return new ResponseModel('Unique constraint failed on field E-mail', true)
            this.users.push({
            
                ...data,
                id: new Date().toISOString()
            })
            return new ResponseModel('Usuário criado com sucesso!', false)
        } catch (error) {
            return new ResponseModel("Houve um problema ao cadastrar o usuário!", true)
        }
    }
    
}