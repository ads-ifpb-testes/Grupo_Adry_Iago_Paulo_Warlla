import { Router } from "express";
import { Request, Response } from "express";
import { loginUserController } from "./UseCases/User/Login";
import { addUserControler } from "./UseCases/User/Add";
import { addProductController } from "./UseCases/Products/Add";
import { listProductController, listProductUserCase } from "./UseCases/Products/List";
import { deleteProductController } from "./UseCases/Products/Delete";
import { fetchProductController } from "./UseCases/Products/Fetch";
import { editProductController } from "./UseCases/Products/Edit";

const routes = Router();

//Telas de login e cadastro
routes.get("/", (req:Request, res:Response)=>{
    res.render("index")
})

routes.get("/cadastrar", (req:Request, res:Response)=>{
    res.render("register")
})
routes.get("/inicio", async (req:Request, res:Response)=>{
    let products = await listProductUserCase.execute();
    if(products.has_error || products.data.length <= 0){
        res.render("home")
    }else {
        res.render("home", {products: products.data}) 
    }
   
})

// Rotas do usuário
routes.post("/login", async (req:Request, res:Response)=>{
    return await loginUserController.handle(req, res);
})
routes.post("/cadastrar", async (req:Request, res:Response)=>{
    return await addUserControler.handle(req, res);
})

//Rotas do produto
routes.post("/produto", async (req:Request, res:Response)=>{
    return await addProductController.handle(req, res);
})
routes.put("/produto/", async (req:Request, res:Response)=>{
    return await editProductController.handle(req, res);
})
routes.delete("/produto", async (req:Request, res:Response)=>{
    return await deleteProductController.handle(req, res);
})
routes.get("/produto/:id", async (req:Request, res:Response)=>{
    return await fetchProductController.handle(req, res);
})
routes.get("/produto/", async (req:Request, res:Response)=>{
    return await listProductController.handle(req, res);
})


export {routes}