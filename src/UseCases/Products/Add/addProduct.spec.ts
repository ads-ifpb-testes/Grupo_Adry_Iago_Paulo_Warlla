import {describe, it, expect, beforeAll} from 'vitest'
import { ProductRepositoryMock } from '../Mock/ProductRepositoryMock'
import { AddProductUserCase } from './useCase'
import { AddProductModel } from './model'


let useCase:AddProductUserCase
beforeAll(async ()=>{
    let repo = new ProductRepositoryMock()
    useCase = new AddProductUserCase(repo)
})

describe("Trying add a product passing all required field", ()=>{
    
    it("Must return a ResponseModel without error", async ()=>{
        let productToSave:AddProductModel = {
            name: 'Something',
            description: 'IDK',
            qtd: 2,
            unityPrice: 2,
            totalPrice: 4
            
        }
        let result = await useCase.execute(productToSave)
        expect(result).toMatchObject({data: "Produto cadastrado com sucesso!",has_error:false}) 

    })
})
describe("Trying add a product whithout a name field", ()=>{
    
    it("Must return a ResponseModel with error", async ()=>{
        let productToSave:AddProductModel = {
            name:'',
            description: 'IDK',
            qtd: 2,
            unityPrice: 2,
            totalPrice: 4
        }
        let result = await useCase.execute(productToSave)
        expect(result).toMatchObject({data: "Um ou mais campos são inválidos!",has_error:true}) 

    })
})
describe("Trying add a product whithout a description field", ()=>{
    
    it("Must return a ResponseModel with error", async ()=>{
        let productToSave:AddProductModel = {
            name:'Something',
            description: '',
            qtd: 2,
            unityPrice: 2,
            totalPrice: 4
        }
        let result = await useCase.execute(productToSave)
        expect(result).toMatchObject({data: "Um ou mais campos são inválidos!",has_error:true}) 

    })
})
describe("Trying add a product whithout a qtd field", ()=>{
    
    it("Must return a ResponseModel with error", async ()=>{
        let productToSave:AddProductModel = {
            name:'Something',
            description: '',
            qtd: 0,
            unityPrice: 2,
            totalPrice: 4
        }
        let result = await useCase.execute(productToSave)
        expect(result).toMatchObject({data: "Um ou mais campos são inválidos!",has_error:true}) 

    })
})
describe("Trying add a product whithout a unityPrice field", ()=>{
    
    it("Must return a ResponseModel with error", async ()=>{
        let productToSave:AddProductModel = {
            name:'Something',
            description: '',
            qtd: 1,
            unityPrice: 0,
            totalPrice: 4
        }
        let result = await useCase.execute(productToSave)
        expect(result).toMatchObject({data: "Um ou mais campos são inválidos!",has_error:true}) 

    })
})
describe("Trying add a product whithout a totalPrice field", ()=>{
    
    it("Must return a ResponseModel with error", async ()=>{
        let productToSave:AddProductModel = {
            name:'Something',
            description: '',
            qtd: 1,
            unityPrice: 1,
            totalPrice: 0
        }
        let result = await useCase.execute(productToSave)
        expect(result).toMatchObject({data: "Um ou mais campos são inválidos!",has_error:true}) 

    })
})