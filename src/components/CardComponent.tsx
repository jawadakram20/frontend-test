import React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import { CardActionArea, styled, useTheme } from "@mui/material"
import FormGroup from "@mui/material/FormGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import Checkbox from "@mui/material/Checkbox"

interface CardComponentProps {
  handleOnChange?: () => void
  isChecked?: boolean
  label?: string
}

const css = {
  maxWidth: "229px",
  minHeight: "150px",
  borderRadius: "10px",
  boxShadow: 0
}
const notSelected = {
  boxShadow: "0px 0px 0px 1px #EFEFEF",
  "&:hover": { border: 0, boxShadow: "0px 0px 0px 1px #65E9D9" }
}
const Selected = {
  boxShadow: "0px 0px 0px 1px #3D8479, 0px 0px 0px 3px #65E9D9 "
}
const cardContent = {
  paddingLeft: "18.25",
  display: "flex",
  alignItems: "center",
  paddingY: 0,
  minHeight: "50px"
}

const CardComponent = ({ label, handleOnChange, isChecked }: CardComponentProps) => {

  const CustomCheckbox = styled(Checkbox)(() => ({
    "& .MuiSvgIcon-root": {
      fontSize: "15px"
    }
  }))

  return (
    <Card sx={isChecked ? { ...css, ...Selected } : { ...css, ...notSelected }}>
      <CardActionArea>
        <CardMedia component="img" height="100px" image={require("../images/cardMedia.png")} alt="Image not Found" />
        <CardContent sx={cardContent}>
          <FormGroup>
            <FormControlLabel
              control={<CustomCheckbox color="primary" checked={isChecked} onChange={handleOnChange} />}
              label={<Typography variant="body1">{label}</Typography>}
            />
          </FormGroup>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default CardComponent
