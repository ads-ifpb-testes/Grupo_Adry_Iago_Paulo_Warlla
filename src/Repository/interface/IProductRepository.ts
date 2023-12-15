import { AddProductModel } from "../../UseCases/Products/Add/model";
import { DeleteProductModel } from "../../UseCases/Products/Delete/model";
import { EditProductModel } from "../../UseCases/Products/Edit/model";
import { ResponseModel } from "../../util/ResponseModel";

export interface IProductRepository {
    add(data:AddProductModel):Promise<ResponseModel>
    list():Promise<ResponseModel>
    fetch(id:string):Promise<ResponseModel>
    delete(data:DeleteProductModel):Promise<ResponseModel>
    edit(data:EditProductModel):Promise<ResponseModel>
}