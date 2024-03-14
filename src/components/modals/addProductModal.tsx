export const AddProductModal = () => {
    return (
        <div className="flex flex-col justify-center items-center w-[40%] h-full bg-light h-auto gap-xl_gap rounded-sm_radius py-xl_p shadow-2xl">
            <div className="text-lg_text">Enter product details</div>
            <div className="flex flex-col w-[80%] gap-lg_gap">
                <input className="h-[40px] w-full text-dark text-sm_text bg-transparent border border-2 border-solid rounded-sm_radius outline-none p-lg_p" type="text" placeholder="Name" />
                <input className="h-[40px] w-full text-dark text-sm_text bg-transparent border border-2 border-solid rounded-sm_radius outline-none p-lg_p" type="text" placeholder="Amount" />
                <input className="h-[40px] w-full text-dark text-sm_text bg-transparent border border-2 border-solid rounded-sm_radius outline-none p-lg_p" type="text" placeholder="Price" />
                <input className="h-[40px] w-full text-dark text-sm_text bg-transparent border border-2 border-solid rounded-sm_radius outline-none p-lg_p" type="text" placeholder="Customer" />
                <input className="h-[40px] w-full text-dark text-sm_text bg-transparent border border-2 border-solid rounded-sm_radius outline-none p-lg_p" type="text" placeholder="Email" />
                <input className="h-[40px] w-full text-dark text-sm_text bg-transparent border border-2 border-solid rounded-sm_radius outline-none p-lg_p" type="text" placeholder="Phone" />
                <input className="h-[40px] w-full text-dark text-sm_text bg-transparent border border-2 border-solid rounded-sm_radius outline-none p-lg_p" type="text" placeholder="Status" />
            </div>
            <div className="flex flex-row justify-around w-full">
                <button className="bg-primary px-xl_p py-lg_p rounded-sm_radius text-light text-md_text">Cancel</button>
                <button className="bg-primary px-xl_p py-lg_p rounded-sm_radius text-light text-md_text">Add</button>
            </div>
        </div>
    )
}