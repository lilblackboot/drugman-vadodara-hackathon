import React from 'react'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './table.css'


const Table = (props) => {
  console.log("table")
  return (
    <div>
       <table className="table">
  <thead>
    <tr>
      <th scope="col">OrderId</th>
      <th scope="col">Medicine</th>
      <th scope="col">OrderDate</th>
      <th scope="col">Statue</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table> 
    </div>
  )
}

export default Table