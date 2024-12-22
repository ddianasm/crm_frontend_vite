import { z } from 'zod';

export const productSchema = z.object({
    name: z.string().min(2).max(30),
    amount: z.preprocess(
        (val) => (val === " " ? undefined : Number(val)),
        z.number().int().nonnegative().optional()
    ),
    price: z.preprocess(
        (val) => (val === " " ? undefined : Number(val)),
        z.number().int().nonnegative().optional()
    ),
    customer: z.string().min(2).max(30),
    email: z.string().email(),
    phone: z.string().regex(/^\+380\d{9}$/),
    // status: z.string()
})