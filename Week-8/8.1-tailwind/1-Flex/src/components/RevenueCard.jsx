import Button from '@mui/material/Button';

export function RevenueCard({title,amount,orderCount}){
    return <div className="bg-white rounded m-10 shadow-md p-4 hover:bg-blue-200">
        <div className="flex justify-center text-gray-700 flex-col">
            <div className="flex">
                <div>{title}</div>
                <div className="ml-2 flex justify-center flex-col">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 ">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                    </svg>
                </div>
            </div>
        </div>

        <div className="flex justify-between pt-2">
            <div className="text-3xl font-semibold">₹{amount}</div>
            {orderCount? <div className="flex text-blue-700 cursor-pointer underline font-medium text-lg flex flex-col justify-center">
                <div className="flex">
                    {orderCount} Orders
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 mt-1.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                </div>
            </div>:null} 
        </div>
        <Button variant="contained">Contained</Button>     
    </div>
}