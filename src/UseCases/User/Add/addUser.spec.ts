import {describe, it, expect, beforeAll} from 'vitest'
import { UserRepositoryMock } from '../Mock/UserRepositoryMock'
import { AddUserUseCase } from './useCase'
import { AddUserModel } from './model'



let useCase:AddUserUseCase

beforeAll(async ()=> {
    let repo = new UserRepositoryMock()
    useCase = new AddUserUseCase(repo)
})

describe("Trying register an user passing all necessary fields", ()=>{
    it("Must return a ResponseModel without error", async ()=>{
        let userToSave:AddUserModel = {
            email: 'jhonDoe123@gmail.com',
            password: 'teste1234',
            name: 'Jhon Doe',
            state: 'Ceará',
            street: 'Rua da lombada',
            homeNumber: '139'
        }
        let result = await useCase.execute(userToSave)
        expect(result).toMatchObject({data:'Usuário criado com sucesso!', has_error:false})
    })
})
describe("Trying register an user without passing your name field", ()=>{
    it("Must return a ResponseModel with error", async ()=>{
        let userToSave:AddUserModel = {
            email: 'jhonDoe123@gmail.com',
            password: 'teste1234',
            name: '',
            state: 'Ceará',
            street: 'Rua da lombada',
            homeNumber: '139'
        }
        let result = await useCase.execute(userToSave)
        expect(result).toMatchObject({data:'Um ou mais campos são inválidos!', has_error:true})
    })
})
describe("Trying register an user without passing your state field", ()=>{
    it("Must return a ResponseModel with error", async ()=>{
        let userToSave:AddUserModel = {
            email: 'jhonDoe123@gmail.com',
            password: 'teste1234',
            name: 'Jhon Doe',
            state: '',
            street: 'Rua da lombada',
            homeNumber: '139'
        }
        let result = await useCase.execute(userToSave)
        expect(result).toMatchObject({data:'Um ou mais campos são inválidos!', has_error:true})
    })
})
describe("Trying register an user without passing your street field", ()=>{
    it("Must return a ResponseModel with error", async ()=>{
        let userToSave:AddUserModel = {
            email: 'jhonDoe123@gmail.com',
            password: 'teste1234',
            name: 'Jhon Doe',
            state: 'Ceará',
            street: '',
            homeNumber: '139'
        }
        let result = await useCase.execute(userToSave)
        expect(result).toMatchObject({data:'Um ou mais campos são inválidos!', has_error:true})
    })
})
describe("Trying register an user without passing your homeNumber field", ()=>{
    it("Must return a ResponseModel with error", async ()=>{
        let userToSave:AddUserModel = {
            email: 'jhonDoe123@gmail.com',
            password: 'teste1234',
            name: 'Jhon Doe',
            state: 'Ceará',
            street: 'Rua da lombada',
            homeNumber: ''
        }
        let result = await useCase.execute(userToSave)
        expect(result).toMatchObject({data:'Um ou mais campos são inválidos!', has_error:true})
    })
})
describe("Trying register an user passing a password with less than 8 characters", ()=>{
    it("Must return a ResponseModel with error", async ()=>{
        let userToSave:AddUserModel = {
            email: 'jhonDoe123@gmail.com',
            password: 'small',
            name: 'Jhon Doe',
            state: 'Ceará',
            street: 'Rua da lombada',
            homeNumber: ''
        }
        let result = await useCase.execute(userToSave)
        expect(result).toMatchObject({data:'Um ou mais campos são inválidos!', has_error:true})
    })
})
describe("Trying register an user passing an invalid E-mail", ()=>{
    it("Must return a ResponseModel with error", async ()=>{
        let userToSave:AddUserModel = {
            email: 'invalidEmail',
            password: 'teste1234',
            name: 'Jhon Doe',
            state: 'Ceará',
            street: 'Rua da lombada',
            homeNumber: '145'
        }
        let result = await useCase.execute(userToSave)
        expect(result).toMatchObject({data:'Um ou mais campos são inválidos!', has_error:true})
    })
})
describe("Trying register an user passing an E-maill already registred", ()=>{
    it("Must return a ResponseModel with error", async ()=>{
        let userToSave:AddUserModel = {
            email: 'jhonDoe123@gmail.com',
            password: 'teste1234',
            name: 'Jhon Doe',
            state: 'Ceará',
            street: 'Rua da lombada',
            homeNumber: '145'
        }
        let result = await useCase.execute(userToSave)
        expect(result).toMatchObject({data:'Unique constraint failed on field E-mail', has_error:true})
    })
})