import { serverRequests } from "@/API/server.requests";
import { TableState } from "@/store/TableState";
import { EProductStatus } from "../components/modals/addProductModal/AddProductModal";
import { errorMessages } from "@/constants/errorMessages";

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
    serverRequests.getProducts()
        .then(response => {
            if (response.data) {
                TableState.setRows(response.data);
            }
        })
        .catch(error => {
            console.error(errorMessages.products.GET_PRODUCTS_FAILED, error);
        });
};

export const addProduct = (data: TSendProductData, setErrorMessage: (message: string) => void) => {
    serverRequests.addProduct(data)
        .then(response => {
            if (response.status === 200) {
                getProducts();
            } else {
                setErrorMessage(errorMessages.products.ADD_PRODUCT_FAILED);
            }
        })
        .catch(error => {
            console.error(errorMessages.products.ADD_PRODUCT_FAILED, error);
            setErrorMessage(errorMessages.products.ADD_PRODUCT_FAILED);
        });
};

export const deleteProducts = (data: number[]) => {
    serverRequests.deleteProducts(data)
        .then(response => {
            if (response.status === 200) {
                getProducts();
            }
        })
        .catch(error => {
            console.error(errorMessages.products.DELETE_PRODUCT_FAILED, error);
        });
};
