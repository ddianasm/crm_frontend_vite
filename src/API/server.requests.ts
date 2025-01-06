import { mainInstance } from "@/API/instance";
import { TProduct } from "@/types";
import { TAuthData } from "@/types";;

export const serverRequests = {
  sendSignUpData: async (data: TAuthData) =>
    mainInstance.post("/auth/signup", data),

  sendSignInData: async (data: TAuthData) =>
    mainInstance.post("/auth/signin", data),

  checkAuth: async () => await mainInstance.get("/auth"),

  logout: async () => await mainInstance.get("/auth/logout"),

  addProduct: async (data: TProduct) =>
    mainInstance.post('/products/add', data),

  deleteProducts: async (data: number[]) =>
    mainInstance.post('/products/delete', data),

  getProducts: async () => await mainInstance.get('/products/get'),

  getProductsColumns: async () => await mainInstance.get('/products/columns')
};
