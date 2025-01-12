import { ZodSchema } from 'zod';

export const validateForm = <T extends Record<string, any>>(
    schema: ZodSchema<T>,
    values: T
) => {
    try {
        schema.parse(values);
        return {};
    } catch (error: any) {
        const errors: Record<string, string> = {};
        error.errors.forEach((err: any) => {
            errors[err.path[0]] = err.message;
        });
        return errors;
    }
};