import { serverRequests } from "@/API/server.requests";
import { TableState } from "@/store/TableState";
import { EProductStatus } from "../components/modals/addProductModal/AddProductModal";
import { productErrorMessages } from "@/constants/productErrorMessages";

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
            console.error(productErrorMessages.GET_PRODUCTS_FAILED, error);
        });
};

export const addProduct = (data: TSendProductData, setErrorMessage: (message: string) => void) => {
    serverRequests.addProduct(data)
        .then(response => {
            if (response.status === 200) {
                getProducts();
            } else {
                setErrorMessage(productErrorMessages.ADD_PRODUCT_FAILED);
            }
        })
        .catch(error => {
            console.error(productErrorMessages.ADD_PRODUCT_FAILED, error);
            setErrorMessage(productErrorMessages.ADD_PRODUCT_FAILED);
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
            console.error(productErrorMessages.DELETE_PRODUCT_FAILED, error);
        });
};
