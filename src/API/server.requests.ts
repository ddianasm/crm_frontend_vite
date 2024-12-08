import { mainInstance } from "./instance";

type TAuthData = {
  username: string;
  password: string;
};

type TAddProduct = {
  name: string,
  amount: number,
  price: number,
  customer: string,
  email: string,
  phone: string,
  status: string
}
export const serverRequests = {
  sendSignUpData: async (data: TAuthData) =>
    mainInstance.post("/auth/signup", data),

  sendSignInData: async (data: TAuthData) =>
    mainInstance.post("/auth/signin", data),

  checkAuth: async () => await mainInstance.get("/auth"),

  logout: async () => await mainInstance.get("/auth/logout"),

  addProduct: async (data: TAddProduct) =>
    mainInstance.post('/products/add', data),

  deleteProducts: async (data: number[]) =>
    mainInstance.post('/products/delete', data),

  getProducts: async () => await mainInstance.get('/products/get'),

  getProductColumns: async () => await mainInstance.get('/columns')
};
