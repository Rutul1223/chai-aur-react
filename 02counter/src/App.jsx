import { useState } from 'react'
import './App.css'

// function App() {
//   let [counter, setCounter] = useState(0);

//  const addValue = ()=>{
//   setCounter(counter+1);
//  }

//  const removeValue = ()=>{
//   setCounter(counter-1);
//  }

//   return (
//     <>
//       <h2>Counter {counter}</h2>
//       <button onClick={addValue}>increase +</button>
//       <button onClick={removeValue}>increase -</button>
//     </>
//   )
// }



function App() {
  let [counter, setCounter] = useState(0);

 const addValue = ()=>{
  if(counter>=5){
    alert('you can not increase above 5 value')
  }else{
    setCounter(counter+1);
  }
 }
// you can decrease max 0
 const removeValue = ()=>{
  if(counter>0){
    setCounter(counter-1);
  }else{
    alert('you can not decrease the value below the 0')
  }
 }

  return (
    <>
      <h2>Counter {counter}</h2>
      <button onClick={addValue}>increase +</button>
      <button onClick={removeValue}>increase -</button>
    </>
  )
}



export default App
