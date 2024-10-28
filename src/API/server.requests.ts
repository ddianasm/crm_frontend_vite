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
    mainInstance.post("/sign-up", data),

  sendSignInData: async (data: TAuthData) =>
    mainInstance.post("/sign-in", data),

  checkAuth: async () => await mainInstance.get("/auth"),

  logout: async () => await mainInstance.get("/logout"),

  addProduct: async (data: TAddProduct) =>
    mainInstance.post('/add-product', data),

  deleteProducts: async (data: number[]) =>
    mainInstance.post('/delete-products', data),

  getProducts: async () => await mainInstance.get('/products'),

  getProductColumns: async () => await mainInstance.get('/columns')
};
