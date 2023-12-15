import * as z from 'zod';




export const DeleteProductDTO = z.object({
    id:z.string().min(8, "É necessário informar um id."),
     
});

export type DeleteProductModel = z.infer<typeof DeleteProductDTO>