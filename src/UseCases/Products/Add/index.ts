import { ProductRepository } from "../../../Repository/ProductRepository";
import { AddProductController } from "./controller";
import { AddProductUserCase } from "./useCase";

let repo =  new ProductRepository()
let addProductUseCase = new AddProductUserCase(repo)
let addProductController = new AddProductController(addProductUseCase)


export {addProductController, addProductUseCase}