import { IProductRepository } from "../../../Repository/interface/IProductRepository";
import { ResponseModel } from "../../../util/ResponseModel";
import { DeleteProductDTO, DeleteProductModel } from "./model";


export class DeleteProductUseCase {

    constructor(private repository:IProductRepository){}

    async execute(data:DeleteProductModel){
        let typeCheck:any = DeleteProductDTO.safeParse(data)
        
        if(!typeCheck.success) return await new ResponseModel("Id inválido", true, typeCheck.error.errors );

        return await this.repository.delete(typeCheck.data);
    }
}