import { createTheme } from "@mui/material/styles"

export const muiTheme = createTheme({
  palette: {
    primary: { main: "#21B6A8" }
  },
  typography: {
    fontFamily: ["Plus Jakarta Sans, Arial"].join(","),
    body1: {
      fontSize: "14px"
    }
  }
})