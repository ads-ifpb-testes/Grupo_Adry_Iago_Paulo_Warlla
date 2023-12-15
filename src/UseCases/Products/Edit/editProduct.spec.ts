import {describe, it, beforeAll, expect} from 'vitest'
import { ProductRepositoryMock } from '../Mock/ProductRepositoryMock'
import { EditProductUserCase } from './useCase'
import { AddProductUserCase } from '../Add/useCase'
import { EditProductModel } from './model'


let useCase:EditProductUserCase
let productForEdit:EditProductModel
beforeAll(async ()=>{
    let products
    let repo = new ProductRepositoryMock()
    let addProductUseCase = new AddProductUserCase(repo)
    addProductUseCase.execute({
        name:'Something',
        description:'IDK',
        qtd: 2,
        unityPrice:1,
        totalPrice: 2, 
    })
    products = await repo.list()
    productForEdit= products.data.map((el:any)=>{if(el.name=='Something') return el})[0]
    useCase = new EditProductUserCase(repo)
})


describe("Trying edit a product passing all necessary fields", ()=>{
    it("Must return a Response implementation without error", async ()=>{

        productForEdit.name = "First Edit"
        productForEdit.description="First time editing the product"
        productForEdit.qtd = 2,
        productForEdit.unityPrice = 1
        productForEdit.totalPrice = 2
        let result = await useCase.execute({
            ...productForEdit
        })
        expect(result).toMatchObject({data:'Produto atualizado!',has_error:false})
    })
})

describe("Trying edit a product passing an invalid id", ()=>{
    it("Must return a Response implementation with error", async ()=>{

        productForEdit.id =''
        productForEdit.name = "Second edit"
        productForEdit.description="Trying edit for the second time"
        productForEdit.qtd = 2,
        productForEdit.unityPrice = 1
        productForEdit.totalPrice = 2
        let result = await useCase.execute({
            ...productForEdit
        })
        expect(result).toMatchObject({data:'Um ou mais campos são inválidos!', has_error:true})
    })
})



