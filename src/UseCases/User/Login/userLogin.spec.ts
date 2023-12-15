import { describe, it, expect, beforeAll } from "vitest";
import { UserRepositoryMock } from "../Mock/UserRepositoryMock";
import { LoginUserUseCase } from "./useCase";
import { AddUserUseCase } from "../Add/useCase";

let useCase:LoginUserUseCase
beforeAll(async ()=>{

    let repo = new UserRepositoryMock()
    let addUserUseCase  = new AddUserUseCase(repo)
    await addUserUseCase.execute({
        email:'jhonDoe123@gmail.com',
        homeNumber:'123',
        name:'Jhon Doe',
        password:'teste1234',
        state:'ceará',
        street:'rua da lombada'
    })
    useCase = new LoginUserUseCase(repo)
})

describe('Trying make a successfull login', () => {
    it('Must return a ResponseImplementation without error', async ()=>{
        let result = await useCase.execute({
            email:'jhonDoe123@gmail.com',
            password:'teste1234'
        })
        expect(result).toMatchObject({data:'Usuário logado com sucesso!', has_error:false})
    }) 
})
describe('Trying make login passing a wrong E-mail', () => {
    it('Must return a ResponseImplementation with error', async ()=>{
        let result = await useCase.execute({
            email:'wrongEmail@gmail.com',
            password:'teste1234'
        })
        expect(result).toMatchObject({data:'E-mail ou senha inválidos', has_error:true})
    }) 
})
describe('Trying make login passing a wrong password', () => {
    it('Must return a ResponseImplementation with error', async ()=>{
        let result = await useCase.execute({
            email:'jhonDoe123@gmail.com',
            password:'wrongPassword'
        })
        expect(result).toMatchObject({data:'E-mail ou senha inválidos', has_error:true})
    }) 
})
describe('Trying make login passing an E-mail invalid', () => {
    it('Must return a ResponseImplementation with error', async ()=>{
        let result = await useCase.execute({
            email:'invalidEmail',
            password:'wrongPassword'
        })
        expect(result).toMatchObject({data:'E-mail ou senha em formato inválido', has_error:true})
    }) 
})
describe('Trying make login passing a password with less than 8 characteres', () => {
    it('Must return a ResponseImplementation with error', async ()=>{
        let result = await useCase.execute({
            email:'jhonDoe123@gmail.com',
            password:'123'
        })
        expect(result).toMatchObject({data:'E-mail ou senha em formato inválido', has_error:true})
    }) 
})