import { z } from 'zod';

export const authSchema = z.object({
    username: z.string().min(2, 'Username must be at least 2 characters').max(20, 'Username must be at most 20 characters'),
    password: z.string().min(8, 'Password must be at least 8 characters').max(20, 'Password must be at most 20 characters'),
});