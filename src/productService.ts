import { serverRequests } from "@/API/server.requests";
import { TableState } from "@/store/TableState";
import { EProductStatus } from "./components/modals/AddProductModal";

type TSendProductData = {
    name: string;
    amount: number;
    price: number;
    customer: string;
    email: string;
    phone: string;
    status: EProductStatus;
};

export const getProducts = () => {
    serverRequests.getUserProducts()
        .then(response => {
            if (response.data) {
                TableState.setRows(response.data);
            } else {
                console.log('Дані не отримані.');
            }
        })
        .catch(error => {
            console.error('Error getting product:', error);
        })
}

export const addProduct = (product: TSendProductData) => {
    serverRequests.addProduct(product)
        .then(response => {
            if (response.status === 200) {
                console.log('товар додано в бд');
                getProducts()
            } else {
                console.log('товар не додано в бд');
            }
        })
        .catch(error => {
            console.error('Error getting product:', error);
        })
}