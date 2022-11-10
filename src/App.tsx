import React, { useState } from "react"
import CardComponent from "./components/CardComponent"
import './App.css'

function App()
{
  const [isChecked, setIsChecked] = useState(false)
  const handleOnChange=()=>{
    setIsChecked(!isChecked)
  }
    const label:string = "Flood zone 3"
  return (
    <div className='align-center'>
      <CardComponent label={label} isChecked={isChecked} handleOnChange={handleOnChange}/>
    </div>
  )
}

export default App
