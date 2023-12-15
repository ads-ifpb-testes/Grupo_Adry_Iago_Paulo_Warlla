import { IProductRepository } from "../../../Repository/interface/IProductRepository";
import { ResponseModel } from "../../../util/ResponseModel";



export class FetchProductUseCase {

    constructor(private repository:IProductRepository){}

    async execute(id:string){
        return await this.repository.fetch(id);
    }
}