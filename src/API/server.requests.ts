import { mainInstance } from "./instance";

type AuthDataType = {
  username: string;
  password: string;
};
export const serverRequests = {
  sendSignUpDataAsync: async (data: AuthDataType) =>
    mainInstance.post("/sign_up", data),
  sendSignInDataAsync: async (data: AuthDataType) =>
    mainInstance.post("/sign_in", data),
  checkAuthAsync: async () => await mainInstance.get("/auth"),
  addProduct: async (data: { name: string }) =>
    mainInstance.post('/add_product', data),
  deleteProduct: async (data: { name: string }) =>
    mainInstance.post('delete_product', data),
  getUserProducts: async () => await mainInstance.get('/get_products')
};
