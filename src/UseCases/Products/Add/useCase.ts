import { IProductRepository } from "../../../Repository/interface/IProductRepository";
import { ResponseModel } from "../../../util/ResponseModel";
import { AddProductDTO, AddProductModel } from "./model";

export class AddProductUserCase {

    constructor(private repository:IProductRepository){}

    async execute(data:AddProductModel){
        let typeCheck:any = AddProductDTO.safeParse(data)
        
        if(!typeCheck.success) return await new ResponseModel("Um ou mais campos são inválidos!", true, typeCheck.error.errors );

        return await this.repository.add(typeCheck.data);
    }
}