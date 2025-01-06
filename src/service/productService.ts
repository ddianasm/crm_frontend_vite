import { serverRequests } from "@/API/server.requests";
import { TableState } from "@/store/TableState";
import { EProductStatus } from "@/enums";
import { productErrorMessages } from "@/constants/productErrorMessages";
import { TProduct } from "@/types";
import React from "react";

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

export const addProduct = (data: TProduct, setProductErrorMessage: (message: string) => void) => {
    serverRequests.addProduct(data)
        .then(response => {
            if (response.status === 200) {
                getProducts();
            } else {
                setProductErrorMessage(productErrorMessages.ADD_PRODUCT_FAILED);
            }
        })
        .catch(error => {
            console.error(productErrorMessages.ADD_PRODUCT_FAILED, error);
            setProductErrorMessage(productErrorMessages.ADD_PRODUCT_FAILED);
        });
};

export const deleteProducts = (data: number[], setProductErrorMessage: (message: string) => void) => {
    serverRequests.deleteProducts(data)
        .then(response => {
            if (response.status === 200) {
                console.log('success delete 200');
                TableState.clearSelectedRows()
                getProducts();
            } else {
                setProductErrorMessage(productErrorMessages.DELETE_PRODUCTS_FAILED);
                console.log('error delete');
            }
        })
        .catch(error => {
            console.error(productErrorMessages.DELETE_PRODUCTS_FAILED, error);
            setProductErrorMessage(productErrorMessages.DELETE_PRODUCTS_FAILED);
        });
};

export const getProductsColumns = () => {
    serverRequests.getProductsColumns()
        .then(response => {
            if (response.data) {
                TableState.setColumns(response.data);
            }
        })
        .catch(error => {
            console.error(productErrorMessages.GET_PRODUCTS_COLUMNS_FAILED, error);
        });
}
