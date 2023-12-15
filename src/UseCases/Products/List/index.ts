import { ProductRepository } from "../../../Repository/ProductRepository";
import { ListProductControler } from "./controller";
import { ListProductUserCase } from "./useCase";


let repo =  new ProductRepository()
let listProductUserCase = new ListProductUserCase(repo)
let listProductController = new ListProductControler(listProductUserCase)


export {listProductUserCase, listProductController}