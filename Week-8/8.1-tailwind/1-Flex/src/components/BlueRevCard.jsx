import Button from '@mui/material/Button';

export function BlueRevCard({title,amount,orderCount}){
    return <div className="bg-[#146EB4] rounded  shadow-md m-4 p-4 hover:bg-[#0E4F82] text-white min-w-[300px]">
        <div className="flex justify-cente flex-col">
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
            {orderCount? <div className="flex text-white cursor-pointer underline font-medium text-lg flex-col justify-center">
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
    </div>
}
<div className="rounded-[8px] flex-grow hover:bg-[#0E4F82] bg-[#146EB4] text-white min-w-[300px]"><div className="p-5 flex flex-col gap-4"><h5 className="flex gap-3 items-center">Next Payout <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"></path></svg></h5><div className="flex justify-between items-center"><p className="text-3xl font-medium">₹2,312.23</p><p className="flex items-center font-medium text-base underline">23 Orders <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" className="text-lg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path></svg></p></div></div><div className="px-6 py-2 bg-[#0E4F82] flex justify-between text-[#F2F2F2] rounded-[8px]"><p>Next Payment Date:</p><p>Today, 4:00PM</p></div></div>