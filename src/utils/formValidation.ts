import { ZodSchema } from "zod";

export const validateForm = <T extends Record<string, any>>(
    schema: ZodSchema<T>,
    values: T
) => {
    try {
        schema.parse(values); // Перевірка даних форми за схемою
        return {}; // Якщо все коректно, повертається пустий об'єкт помилок
    } catch (error: any) {
        const errors: Record<string, string> = {};
        error.errors.forEach((err: any) => {
            errors[err.path[0]] = err.message; // Перетворення помилки Zod у формат Formik
        });
        return errors;
    }
};