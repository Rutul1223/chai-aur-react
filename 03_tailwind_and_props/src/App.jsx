import { useState } from 'react'

import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-blue-400 rounded-xl p-4 mb-4'>Tailwind</h1>
      <Card username="XYZ" btnText="click me"/>
      <Card username="ABC"/>
    </>
  )
}

export default App
