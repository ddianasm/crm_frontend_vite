import { serverRequests } from "@/API/server.requests";
import { TableState } from "@/store/TableState";
import { EProductStatus } from "./components/modals/addProductModal/AddProductModal";

// type TSendProductData = {
//     name: string;
//     amount: number;
//     price: number;
//     customer: string;
//     email: string;
//     phone: string;
//     status: EProductStatus;
// };

export const getProducts = () => {
    serverRequests.getProducts()
        .then(response => {
            if (response.data) {
                TableState.setRows(response.data);
            }
        })
        .catch(error => {
            console.error('Error getting product:', error);
        })
}

export const addProduct = (product: any) => {
    console.log(product, 'product');
    serverRequests.addProduct(product)
        .then(response => {
            if (response.status === 200) {
                getProducts()
                console.log('add product func');
            }
        })
        .catch(error => {
            console.error('Error getting product:', error);
        })
}

export const deleteProducts = (products: number[]) => {
    serverRequests.deleteProducts(products)
        .then(response => {
            if (response.status === 200) {
                getProducts()
            }
        })
        .catch(error => {
            console.error('Error deletion product:', error);
        })
}