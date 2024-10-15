import React, { useContext, createContext } from "react";
import { TableState } from "@/store/TableState"

export type TableContextNSType = typeof TableState
export type TableContextNSProviderPropsType = {
    value: TableContextNSType,
    children: React.ReactNode
}

export const TableContextNS = createContext<TableContextNSType>(TableState);
export const useTableContextNS = () => {
    const context = useContext(TableContextNS)
    if (!context) throw new Error("Not found 'TableContextNSProvider'")
    return context
}
export const TableContextNSProvider = ({ value, children }: TableContextNSProviderPropsType) => {
    return (
        <TableContextNS.Provider value={value}>
            {children}
        </TableContextNS.Provider>
    )
}