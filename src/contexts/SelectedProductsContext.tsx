import React, { useContext, createContext } from "react";


type SelectedProductsContextType = {
    selectedOrders: number[];
    setSelectedOrders: React.Dispatch<React.SetStateAction<number[]>>;
}
export type SelectedProductProviderPropsType = {
    value: SelectedProductsContextType,
    children: React.ReactNode
}

export const SelectedProductsContext = createContext<SelectedProductsContextType>({
    selectedOrders: [],
    setSelectedOrders: () => { }
});

export const useSelectedProductsContext = () => {
    const context = useContext(SelectedProductsContext)
    if (!context) throw new Error("Not found 'SelectedProductsProvider'")
    return context
}
export const SelectedProductsProvider = ({ value, children }: SelectedProductProviderPropsType) => {
    return (
        <SelectedProductsContext.Provider value={value}>
            {children}
        </SelectedProductsContext.Provider>
    )
}