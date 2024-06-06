import { useState } from 'react'


function App() {
  const [color, setColor] = useState('olive')
  const grey = () => {
    setColor('grey')
  }
  const lavender = () => {
    setColor('lavender')
  }
  const black = () => {
    setColor('black')
  }
  const pink = () => {
    setColor('pink')
  }
  return (
    <>
      <div style={{ backgroundColor: color }} className='w-full h-screen dureation-200'>
        <div className='fixed flex flex-wrap inset-x-0 px-2 bottom-12 justify-center'>
          <div className='bg-white flex flex-wrap px-3 py-2 rounded-3xl gap-3 shadow-lg'>
            <button onClick={grey} style={{ backgroundColor: 'grey' }} className="shadow-lg outline-none px-4 py-1 rounded-full text-white">Grey</button>
            <button onClick={lavender} style={{ backgroundColor: 'lavender' }} className="shadow-lg outline-none px-4 py-1 rounded-full text-white">Lavender</button>
            <button onClick={black} style={{ backgroundColor: 'black' }} className="shadow-lg outline-none px-4 py-1 rounded-full text-white">Black</button>
            <button onClick={pink} style={{ backgroundColor: 'pink' }} className="shadow-lg outline-none px-4 py-1 rounded-full text-white">Pink</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

