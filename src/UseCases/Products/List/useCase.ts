import { IProductRepository } from "../../../Repository/interface/IProductRepository";
import { ResponseModel } from "../../../util/ResponseModel";


export class ListProductUserCase {

    constructor(private repository:IProductRepository){}

    async execute(){
        return await this.repository.list();
    }
}