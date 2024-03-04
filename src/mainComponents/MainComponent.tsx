import { useState } from "react"
import { serverRequests } from "@/API/server.requests"


export const MainComponent = () => {
    const [productId, setProductId] = useState<number>(1)

    const addProduct = () => {
        serverRequests.addProduct({ productId })
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

    return (
        <div className="flex flex-col gap-[40px] justify-center items-center">
            <div className="flex flex-col justify-center items-center gap-[20px]">
                <input className="border border-primary rounded-global_radius h-[40px] w-[300px]" type="number" onChange={e => setProductId(parseInt(e.target.value))} />
                <button className="h-[40px] w-[100px] bg-primary text-light rounded-global_radius" onClick={() => addProduct()}>Add Product</button>
            </div>
            <div>Товари користувача</div>
        </div>
    )
}