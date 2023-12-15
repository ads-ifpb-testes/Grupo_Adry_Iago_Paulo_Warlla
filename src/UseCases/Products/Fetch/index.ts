import { ProductRepository } from "../../../Repository/ProductRepository";
import { FetchProductController } from "./controller";
import { FetchProductUseCase } from "./useCase";



let repo =  new ProductRepository()
let fetchProductUserCase = new FetchProductUseCase(repo)
let fetchProductController = new FetchProductController(fetchProductUserCase)


export {fetchProductUserCase, fetchProductController}