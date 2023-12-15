import { IProductRepository } from "../../../Repository/interface/IProductRepository";
import { ResponseModel } from "../../../util/ResponseModel";
import { EditProductDTO, EditProductModel } from "./model";

export class EditProductUserCase {

    constructor(private repository:IProductRepository){}

    async execute(data:EditProductModel){
        let typeCheck:any = EditProductDTO.safeParse(data)
        
        if(!typeCheck.success) return await new ResponseModel("Um ou mais campos são inválidos!", true, typeCheck.error.errors );

        return await this.repository.edit(typeCheck.data);
    }
}