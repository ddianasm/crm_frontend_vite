import { useEffect, useState } from "react"
import { serverRequests } from "@/API/server.requests"
import { BasicTable } from "./BasicTable"

export const MainComponent = () => {
    const [product, setProduct] = useState<string>('')

    const addProduct = () => {
        serverRequests.addProduct({ name: product })
            .then(response => {
                if (response.status === 200) {
                    console.log('Product added successfully');
                } else {
                    console.log('Product not added');
                }
            })
            .catch(error => {
                console.error('Error adding product:', error);
            })
    }
    const deleteProduct = () => {
        serverRequests.deleteProduct({ name: product })
            .then(response => {
                if (response.status === 200) {
                    console.log('Product deleted successfully');
                } else {
                    console.log('Product not deleted');
                }
            })
            .catch(error => {
                console.error('Error deletion product:', error);
            })
    }


    return (
        <div className="flex flex-col gap-[40px] justify-center items-center w-[90%]">
            <div className="flex flex-col justify-center items-center gap-[20px]">
                <input className="border border-primary rounded-global_radius h-[40px] w-[300px]" type="text" onChange={e => setProduct(e.target.value)} />
                <button className="h-[40px] w-[120px] bg-primary text-light rounded-global_radius" onClick={() => addProduct()}>Add Product</button>
                <button className="h-[40px] w-[120px] bg-primary text-light rounded-global_radius" onClick={() => deleteProduct()}>Delete Product</button>
            </div>
            {/* <div>
                <div>Товари:</div>
                <div>
                    {products.map(product => (
                        <div key={product.id}>
                            <div>ID: {product.id}</div>
                            <div>Name: {product.name}</div>
                        </div>
                    ))}

                </div>
            </div> */}
            <BasicTable />
        </div>
    )
}