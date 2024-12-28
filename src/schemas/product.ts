import { z } from 'zod';

export const productSchema = z.object({
    name: z.string()
        .min(2, 'At least 2 characters')
        .max(30, 'At most 30 characters'),
    amount: z.preprocess(
        (val) => (val === " " || val === "" ? undefined : Number(val)),
        z.number()
            .int('Must be an integer')
            .nonnegative('Must be a positive number')
    ),
    price: z.preprocess(
        (val) => (val === " " || val === "" ? undefined : Number(val)),
        z.number()
            .int('Must be an integer')
            .nonnegative('Must be a positive number')
    ),
    customer: z.string()
        .min(2, 'At least 2 characters')
        .max(30, 'At most 30 characters'),
    email: z.string()
        .email('Invalid email address'),
    phone: z.string()
        .regex(/^\+380\d{9}$/, 'Invalid phone number'),
});
