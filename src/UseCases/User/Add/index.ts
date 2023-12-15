import { UserRepository } from "../../../Repository/UserRepository";
import { AddUserController } from "./controller";
import { AddUserUseCase } from "./useCase";

let repository = new UserRepository()
let addUserUseCase = new AddUserUseCase(repository)
let addUserControler = new AddUserController(addUserUseCase)

export {addUserControler, addUserUseCase}