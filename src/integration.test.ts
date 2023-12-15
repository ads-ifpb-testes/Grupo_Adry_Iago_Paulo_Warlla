import { app } from "./app";
import request from 'supertest'
import { describe, it, expect, afterAll} from 'vitest'
import { EditProductModel } from "./UseCases/Products/Edit/model";
import { prisma } from "./database";


let product:EditProductModel 

describe("Trying add a product", ()=>{
    it("Must return a status code 200 and an ResponseModel without error", async ()=>{
        const response = await request(app).post("/produto").send({
            name: "Maçã",
            description: "Fruta",
            qtd: 2,
            unityPrice: 2,
            totalPrice: 4
        })
        expect(response.body).toMatchObject(
            {   
                data:'Produto cadastrado com sucesso!',
                has_error:false
            })

        expect(response.status).toBe(200)
    })
})
describe("Trying get all products", ()=>{
    it("Must return a status code 200 and an ResponseModel without error", async ()=>{
        const response = await request(app).get("/produto")
        //Here i'm just getting the product that i've add before for delete later
        product = response.body.data.find(el => el.name === 'Maçã');
        //Bellow i'm doing assertions about the response that i got
        expect(response.status).toBe(200)
        expect(response.body).toMatchObject({has_error:false})
    })
})
describe("Trying edit a product", ()=>{
    it("Must return a status code 200 and an ResponseModel without error", async ()=>{
        
        const response = await request(app).put("/produto").send({
            id: product.id,
            name: "Abacaxi",
            description: "Fruta",
            qtd: 2,
            unityPrice: 2,
            totalPrice: 4,  
        })
        expect(response.status).toBe(200)
        expect(response.body).toMatchObject({data:'Produto atualizado!', has_error:false})
    })
})
describe("Trying delete a product", ()=>{
    it("Must return a status code 200 and an ResponseModel without error", async ()=>{
        const response = await request(app).delete("/produto").send(
            {
                id:product.id
            }
        )
       
        expect(response.status).toBe(200)
        expect(response.body).toMatchObject({data:'Produto deletado com sucesso',has_error:false})
    })
})

describe("Trying register an user", ()=>{
    it("Must return a status code 200 and an ResponseModel without error", async ()=>{
        const response = await request(app).post("/cadastrar").send(
            {
                name: 'Jhon Doe',
                email: 'jhondoe123@gmail.com',
                password: 'teste1234',
                state: 'ceará',
                street: 'rua da lombada',
                homeNumber: '234'
            }
        )  
        expect(response.status).toBe(200)
        expect(response.body).toMatchObject({data:'Usuário criado com sucesso!',has_error:false})
    })
})

describe("Trying make a loging successfull", ()=>{
    it("Must return a status code 200 and an ResponseModel without error", async ()=>{
        const response = await request(app).post("/login").send(
            { 
                email: 'jhondoe123@gmail.com',
                password: 'teste1234',
            }
        )  
        expect(response.status).toBe(200)
        expect(response.body).toMatchObject({data:'Usuário logdao com sucesso!',has_error:false})
    })
})

afterAll(async ()=>{
    try {
        await prisma.user.delete({
            where:{
                email:'jhondoe123@gmail.com'
            }
        })
    } catch (error) {
        console.log(error)
    }
})

