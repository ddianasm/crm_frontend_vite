import { authSchema } from '@/schemas/auth';

export const validateAuthForm = (values: Record<string, any>) => {
    try {
        authSchema.parse(values); // Перевірка даних форми
        return {}; // Якщо все коректно, повертається пустий об'єкт помилок
    } catch (error: any) {
        const errors: Record<string, string> = {};
        error.errors.forEach((err: any) => {
            errors[err.path[0]] = err.message; // Перетворення помилки Zod у формат Formik
        });
        return errors;
    }
};