import { useEffect, useState } from "react"
import { serverRequests } from "@/API/server.requests"
import { Table } from "@/components/table/Table"
import { ProductProvider, Products } from "@/contexts/ProductContext"
import { SelectedProductsProvider } from "@/contexts/SelectedProductsContext"
import { TableState } from "@/store/TableState"


export const TableView = () => {
    const [products, setProducts] = useState<Products[]>([]);
    const [selectedOrders, setSelectedOrders] = useState<number[]>([]);
    const [showAddProductModal, setShowAddProductModal] = useState<boolean>(true)

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

    useEffect(() => {
        console.log(TableState.rows)
    }, [])

    return (
        <ProductProvider value={products}>
            <SelectedProductsProvider value={{ selectedOrders, setSelectedOrders }}>
                < div className="flex flex-col gap-[40px] justify-center items-center w-[95%] mx-[40px]" >
                    < Table setShowAddProductModal={setShowAddProductModal} />
                    {/* {showAddProductModal &&
                        <AddProductModal />
                    } */}
                </div >
            </SelectedProductsProvider >
        </ProductProvider >
    )
}