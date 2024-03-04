import { useEffect, useState } from "react"
import { serverRequests } from "@/API/server.requests"

type Products = {
    id: number,
    name: string
}


export const MainComponent = () => {
    const [productId, setProductId] = useState<number>(1)
    const [products, setProducts] = useState<Products[]>([]);

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

    useEffect(() => {
        serverRequests.getUserProducts()
            .then(response => {
                if (response.data) {
                    console.log(response.data);
                    setProducts(response.data)
                } else {
                    console.log('Products not received');
                }
            })
            .catch(error => {
                console.error('Error getting product:', error);
            })
    }, [])

    return (
        <div className="flex flex-col gap-[40px] justify-center items-center">
            <div className="flex flex-col justify-center items-center gap-[20px]">
                <input className="border border-primary rounded-global_radius h-[40px] w-[300px]" type="number" onChange={e => setProductId(parseInt(e.target.value))} />
                <button className="h-[40px] w-[100px] bg-primary text-light rounded-global_radius" onClick={() => addProduct()}>Add Product</button>
            </div>
            <div>
                <div>Товари:</div>
                <div>
                    {products.map(product => (
                        <div key={product.id}>
                            <div>ID: {product.id}</div>
                            <div>Name: {product.name}</div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}