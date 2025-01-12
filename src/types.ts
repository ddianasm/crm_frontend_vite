import { EProductStatus } from '@/enums';

export type TAuthData = { username: string; password: string; }

export type TProduct = {
    name: string,
    amount: number,
    price: number,
    customer: string,
    email: string,
    phone: string,
    status: EProductStatus;
}