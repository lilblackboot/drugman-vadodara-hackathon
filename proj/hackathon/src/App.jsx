import { useState } from 'react'
import Nav  from './components/nav'
import './App.css'
import Cards from './components/cards.jsx'
import Line from './components/line.jsx'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Table from './components/table.jsx'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav className='mainpageNav'/>
    <div className='state-board'>
     <Cards title='Total Orders' states='#'/>
     <Cards title='Total Inventory' states='#'/>
     <Cards title='Total Sales' states='#'/>
     </div>
    <div className='medicine-orders'>
      <h1>Medicine Orders</h1>
      </div>
    <Line/>
    <Table className='medicineOrderTable'/>
    
    </>
  )
}

export default App
