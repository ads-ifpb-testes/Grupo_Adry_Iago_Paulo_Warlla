import { ProductRepository } from "../../../Repository/ProductRepository";
import { DeleteProductController } from "./controller";
import { DeleteProductUseCase } from "./useCase";


let repo =  new ProductRepository()
let deleteProductUseCase = new DeleteProductUseCase(repo)
let deleteProductController = new DeleteProductController(deleteProductUseCase)


export {deleteProductUseCase, deleteProductController}