import { AddProductModel } from "../UseCases/Products/Add/model";
import { DeleteProductModel } from "../UseCases/Products/Delete/model";
import { EditProductModel } from "../UseCases/Products/Edit/model";
import { prisma } from "../database";
import { ResponseModel } from "../util/ResponseModel";
import { IProductRepository } from "./interface/IProductRepository";

export class ProductRepository implements IProductRepository {
    async edit(data:EditProductModel): Promise<ResponseModel> {
       try {
         await prisma.poduct.update({
            where:{
                id:data.id
            },data:{
                ...data
            }
         })
         return new ResponseModel("Produto atualizado!", false)
       } catch (error) {
        return new ResponseModel("Houve um erro ao atualizar o produto!", false)
       }
    }
    async fetch(id: string): Promise<ResponseModel> {
        try {
            let result = await prisma.poduct.findUnique({
                where:{
                    id:id
                }
            })
            return new ResponseModel(result, false)
        } catch (error) {
            return new ResponseModel("Houve um problema ao buscar o produto.", false)
        }
    }
    async delete(data: DeleteProductModel): Promise<ResponseModel> {
        try {
            let result = await prisma.poduct.delete({
                where:{
                    id:data.id
                }
            })
            return new ResponseModel("Produto deletado com sucesso", false)
         } catch (error) {
             return new ResponseModel("Houve um erro ao deletar o produto.", true)
         }
    }
    
    async add(data: AddProductModel): Promise<ResponseModel> {
        try {
           await prisma.poduct.create({
                data:{
                    ...data
                }
           })
           return new ResponseModel("Produto cadastrado com sucesso!", false)
        } catch (error) {
            return new ResponseModel("Houve um erro ao cadastrar o produto.", true)
        }
    }
    async list(): Promise<ResponseModel> {
        try {
           let result = await prisma.poduct.findMany({})
           return new ResponseModel(result, false)
        } catch (error) {
            return new ResponseModel("Houve um erro ao buscar os produtos.", true)
        }
    }

}