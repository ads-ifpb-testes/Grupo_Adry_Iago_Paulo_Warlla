import * as z from 'zod';

const phoneNumberRegex = new RegExp(/^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/)


export const LoginUserDTO = z.object({
    email:z.string().email("Invalid e-mail format"),
    password:z.string().min(8, "invalid password")
});

export type LoginUser = z.infer<typeof LoginUserDTO>