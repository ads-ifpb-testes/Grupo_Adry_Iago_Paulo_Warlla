import { IProductRepository } from "../../../Repository/interface/IProductRepository";
import { ResponseModel } from "../../../util/ResponseModel";
import { AddProductModel } from "../Add/model";

interface addProductModel {
    id:string
    name: string;
    description: string;
    qtd: number;
    unityPrice: number;
    totalPrice: number;
}
export class ProductRepositoryMock implements IProductRepository {
    private products:Array<addProductModel> = []

    async add(data:AddProductModel): Promise<ResponseModel> {
        try {
            if(!data.name) return await new ResponseModel("Expect field name", true)
            if(!data.description)return await new ResponseModel("Expect field description", true)
            if(!data.qtd)return await new ResponseModel("Expect field qtd", true)
            if(!data.totalPrice)return await new ResponseModel("Expect field totalPrice", true)
            if(!data.unityPrice)return await new ResponseModel("Expect field unityPrice", true)
            this.products.push({
                id: new Date().toISOString(),
                ...data
            })
            return await new ResponseModel("Produto cadastrado com sucesso!", false)
        } catch (error) {
            return new ResponseModel("Houve um erro ao cadastrar o produto.", true)
        }
    }
    async list(): Promise<ResponseModel> {
        return await new ResponseModel(this.products, false)
    }
    fetch(id: string): Promise<ResponseModel> {
        throw new Error("Method not implemented.");
    }
    delete(data: { id: string; }): Promise<ResponseModel> {
        throw new Error("Method not implemented.");
    }
    async edit(data: { name: string; description: string; qtd: number; unityPrice: number; totalPrice: number; id: string; }): Promise<ResponseModel> {
        try {
            this.products.forEach(el => {
                if(el.id == data.id){
                    el = data 
                }
            })
            return new ResponseModel('Produto atualizado!', false)
        } catch (error) {
            return new ResponseModel('Houve um erro ao atualizar o produto!', true)
        }
    }
    
}