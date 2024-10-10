import { useState } from 'react'
import './App.css'
import { ExportAll } from './Tailwind_elements'
import { RevenueCard } from './components/RevenueCard'
import { BlueRevCard } from './components/BlueRevCard'
import { Overview } from './components/Overview'


function App() {
  return (
    /*<ExportAll></ExportAll>*/
    <div className='bg-red-500'>
      <div className=''>
        <Overview></Overview>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-4 mr-4'>
          <BlueRevCard title={"Amount Pending"} amount={"62,73,627"} orderCount={12}></BlueRevCard>
          <RevenueCard title={"Amount Pending"} amount={"62,73,627"} orderCount={12}></RevenueCard>
          <RevenueCard title={"Amount Processed"} amount={"62,73,627"} orderCount={0}></RevenueCard>
        </div>
      </div>
    </div>
  )
}



export default App
<button class="flex items-center gap-3 border rounded px-[14px] py-[6px] bg-white text-[rgb(63,126,245)]">This Month <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path></svg></button>