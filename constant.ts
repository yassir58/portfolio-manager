import { z } from 'zod';

export const requestSchema = z.object({
    email: z.string().email (),
    password:z.string().min(6)
})