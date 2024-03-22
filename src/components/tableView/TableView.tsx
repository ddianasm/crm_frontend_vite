import React, { createContext, useReducer, useEffect, useState } from "react"
import { serverRequests } from "@/API/server.requests"
import { Table } from "@/components/table/Table"

type Products = {
    id: number,
    name: string,
    amount: number,
    price: number,
    customer: string,
    email: string,
    phone: string,
    date: string,
    status: string
}

const productForSend = {
    name: 'laptop',
    amount: 1,
    price: 100,
    customer: 'JuliaG',
    email: 'ggg@gmail.com',
    phone: '+380777777777',
    status: 'new'
}

type selectedOrdersContextType = {
    selectedOrders: number[];
    setSelectedOrders: React.Dispatch<React.SetStateAction<number[]>>;
}

export const selectedOrdersContext = createContext<selectedOrdersContextType>({
    selectedOrders: [],
    setSelectedOrders: () => { }
});
export const productsContext = React.createContext<Products[]>([]);


export const TableView = () => {
    const [products, setProducts] = useState<Products[]>([]);
    const [selectedOrders, setSelectedOrders] = useState<number[]>([]);



    // const deleteProduct = () => {
    //     serverRequests.deleteProduct(selectedOrders)
    //         .then(response => {
    //             if (response.status === 200) {
    //                 console.log('Product deleted successfully');
    //                 getProducts()
    //             } else {
    //                 console.log('Product not deleted');
    //             }
    //         })
    //         .catch(error => {
    //             console.error('Error deletion product:', error);
    //         })
    // }

    const getProducts = () => {
        serverRequests.getUserProducts()
            .then(response => {
                if (response.data) {
                    setProducts(response.data)
                } else {
                    console.log('Products not received');
                }
            })
            .catch(error => {
                console.error('Error getting product:', error);
            })
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <productsContext.Provider value={products}>
            <selectedOrdersContext.Provider value={{ selectedOrders, setSelectedOrders }}>
                < div className="flex flex-col gap-[40px] justify-center items-center w-[95%] mx-[40px]" >
                    < Table />
                    {/* <AddProductModal /> */}
                </div >
            </selectedOrdersContext.Provider>
        </productsContext.Provider>
    )
}