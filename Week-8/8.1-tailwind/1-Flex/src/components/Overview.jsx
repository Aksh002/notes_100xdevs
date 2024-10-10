export function Overview(){
    return <div>
        <div className='flex justify-between ml-8 mr-8 mb-8 pt-4'>
            <div className='text-xl font-semibold'>Overview</div>
            <button className='flex justify-center bg-white rounded  shadow-md border flex-col'>
            <div className="flex justify-between">
              <div className="ml-1 text-gray-500 text-base">This month</div>
              <div className="ml-2 mt-1 mr-1 mb-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </div>
            </div>
            </button>
        </div>
    </div>
}