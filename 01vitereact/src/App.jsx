import { useState } from 'react'
import { fa-pencil } from '@fortawesome/react-fontawesome'


function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <h1>All Items</h1>
    <table border={1}>
      <thead>
        <tr>
          <th>Name</th>
          <th>City</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>vaibhav</th>
          <th>rajkot</th>
          <th>
          <i className="fa-solid fa-pencil"></i>
          </th>
        </tr>
      </tbody>
    </table>
   </>
  )
}

export default App
