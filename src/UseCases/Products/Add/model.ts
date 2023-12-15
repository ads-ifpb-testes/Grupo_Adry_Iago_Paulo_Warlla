import * as z from 'zod';




export const AddProductDTO = z.object({
    name:z.string().min(4, "É necessário informar o nome do produto."),
    description:z.string().min(2,"É necessário informar a descrição do produto."),
    qtd:z.number().min(1, "É necessário informar a quantidade do produto."),
    unityPrice:z.number().min(0.1,"É necessário informar o preço unitário do produto."),
    totalPrice:z.number().min(0.1, "É necessário informar o total do produto."),
    
});

export type AddProductModel = z.infer<typeof AddProductDTO>