import { ProductRepository } from "../../../Repository/ProductRepository";
import { EditProductController } from "./controller";
import { EditProductUserCase } from "./useCase";


let repo =  new ProductRepository()
let editProductUserCase = new EditProductUserCase(repo)
let editProductController = new EditProductController(editProductUserCase)


export {editProductUserCase, editProductController}