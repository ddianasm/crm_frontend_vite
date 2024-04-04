import React, { useContext, createContext } from "react";

export type ProductType = {
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
// @ts-ignore
const productForSend = {
    name: 'laptop',
    amount: 1,
    price: 100,
    customer: 'JuliaG',
    email: 'ggg@gmail.com',
    phone: '+380777777777',
    status: 'new'
}
export type ProductProviderPropsType = {
    value: ProductType[],
    children: React.ReactNode
}

export const ProductsContext = createContext<ProductType[]>([]);
export const useProductContext = () => {
    const context = useContext(ProductsContext)
    if (!context) throw new Error("Not found 'ProductProvider'")
    return context
}
export const ProductProvider = ({ value, children }: ProductProviderPropsType) => {
    return (
        <ProductsContext.Provider value={value}>
            {children}
        </ProductsContext.Provider>
    )
}