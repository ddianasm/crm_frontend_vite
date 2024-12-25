import { z } from 'zod';

export const productSchema = z.object({
    name: z.string()
        .min(2, 'Name must be at least 2 characters')
        .max(30, 'Name must be at most 30 characters'),

    amount: z.preprocess(
        (val) => (val === " " ? undefined : Number(val)),
        z.number()
            .int('Amount must be an integer')
            .nonnegative('Amount must be a positive number')
            .optional()
    ),

    price: z.preprocess(
        (val) => (val === " " ? undefined : Number(val)),
        z.number()
            .int('Price must be an integer')
            .nonnegative('Price must be a positive number')
            .optional()
    ),

    customer: z.string()
        .min(2, 'Customer name must be at least 2 characters')
        .max(30, 'Customer name must be at most 30 characters'),

    email: z.string()
        .email('Please enter a valid email address'),

    phone: z.string()
        .regex(/^\+380\d{9}$/, 'Phone number must be in the format +380XXXXXXXXX'),
});
