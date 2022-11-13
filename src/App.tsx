import React, { useState } from "react"
import CardComponent from "./components/CardComponent"
import "./App.css"
import { ThemeProvider } from "@mui/material/styles"
import { muiTheme } from "./styles/theme"


function App() {
  const [isChecked, setIsChecked] = useState(false)
  const handleOnChange = () => {
    setIsChecked(!isChecked)
  }
  const label: string = "Flood zone 3"
  return (
    <ThemeProvider theme={muiTheme}>
      <div className="align-center">
        <CardComponent label={label} isChecked={isChecked} handleOnChange={handleOnChange} />
      </div>
    </ThemeProvider>
  )
}

export default App
