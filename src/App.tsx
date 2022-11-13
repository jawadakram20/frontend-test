import React, { useState } from "react"
import CardComponent from "./components/CardComponent"
import "./App.css"
import { createTheme, ThemeProvider } from "@mui/material/styles"

const theme = createTheme({
  palette: {
    primary: { main: "#21B6A8" }
  },
  typography: {
    fontFamily: ["Plus Jakarta Sans"].join(","),
    body1: {
      fontSize: "14px"
    }
  }
})

function App() {
  const [isChecked, setIsChecked] = useState(false)
  const handleOnChange = () => {
    setIsChecked(!isChecked)
  }
  const label: string = "Flood zone 3"
  return (
    <ThemeProvider theme={theme}>
      <div className="align-center">
        <CardComponent label={label} isChecked={isChecked} handleOnChange={handleOnChange} />
      </div>
    </ThemeProvider>
  )
}

export default App
