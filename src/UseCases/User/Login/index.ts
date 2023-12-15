import { UserRepository } from "../../../Repository/UserRepository";
import { LoginUserController } from "./controller";
import { LoginUserUseCase } from "./useCase";

let repository = new UserRepository();
let loginUserUseCase = new LoginUserUseCase(repository);
let loginUserController = new LoginUserController(loginUserUseCase);

export  {loginUserController, loginUserUseCase}