import { useEffect, useState } from "react"
import { serverRequests } from "@/API/server.requests"
import { BasicTable } from "@/components/mainPageComponents/table/BasicTable"

type Products = {
    name: string,
    amount: number,
    price: number,
    customer: string,
    email: string,
    phone: string,
    status: string
}

const productForSend = [{
    name: 'box',
    amount: 1,
    price: 100,
    customer: 'Ivan',
    email: 'ivan@gmail.com',
    phone: '+380666666666',
    status: 'new'
}]

export const Content = () => {
    const [productName, setProductName] = useState<string>('')
    // const [products, setProducts] = useState<Products[]>([productForSend]);
    // console.log(products);

    // const addProduct = () => {
    //     serverRequests.addProduct(productForSend)
    //         .then(response => {
    //             if (response.status === 200) {
    //                 console.log('Product added successfully');
    //                 getProducts()
    //             } else {
    //                 console.log('Product not added');
    //             }
    //         })
    //         .catch(error => {
    //             console.error('Error adding product:', error);
    //         })
    // }
    // const deleteProduct = () => {
    //     serverRequests.deleteProduct({ name: productName })
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

    // const getProducts = () => {
    //     serverRequests.getUserProducts()
    //         .then(response => {
    //             if (response.data) {
    //                 console.log(response.data);
    //                 setProducts(response.data)
    //             } else {
    //                 console.log('Products not received');
    //             }
    //         })
    //         .catch(error => {
    //             console.error('Error getting product:', error);
    //         })
    // }

    // useEffect(() => {
    //     getProducts()
    // }, [])
    return (
        <div className="flex items-center justify-center bg-light rounded-global_radius shadow-lg bg-[#009865] m-[10px] box-border">
            <div className="flex flex-col gap-[40px] justify-center items-center w-[90%]">
                <div className="flex flex-col justify-center items-center gap-[20px]">
                    <input className="border border-primary rounded-global_radius h-[40px] w-[300px]" type="text" onChange={e => setProductName(e.target.value)} />
                    {/* <button className="h-[40px] w-[120px] bg-primary text-light rounded-global_radius" onClick={() => addProduct()}>Add Product</button> */}
                    {/* <button className="h-[40px] w-[120px] bg-primary text-light rounded-global_radius" onClick={() => deleteProduct()}>Delete Product</button> */}
                </div>
                <BasicTable products={productForSend} />
            </div>
        </div>
    );
};