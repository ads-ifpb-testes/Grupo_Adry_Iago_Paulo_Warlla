import * as z from 'zod';




export const AddUserDTO = z.object({
    name:z.string().min(4, "Você deve informar seu nome."),
    email:z.string().email("Formato de E-mail inválido"),
    password:z.string().min(8, "A senha deve conter pelo menos 8 caracteres"),
    state:z.string().min(2, "É necessário informar seu estado."),
    street:z.string().min(3, "É necessário informar sua rua."),
    homeNumber:z.string().min(1, "Você deve informar o número da sua casa")
});

export type AddUserModel = z.infer<typeof AddUserDTO>