import { useState } from 'react'
import './App.css'
import { ExportAll } from './Tailwind_elements'
import { RevenueCard } from './components/RevenueCard'

function App() {
  return (
    /*<ExportAll></ExportAll>*/
    <div className='grid grid-cols-3 bg-neutral-50'>
      <RevenueCard title={"Title"} amount={"62,73,627"} orderCount={12}></RevenueCard>
    </div>
  )
}



export default App
