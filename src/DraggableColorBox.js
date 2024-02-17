import React from 'react'
import { withStyles } from "@mui/styles";

const styles = {
    root: {
        width: "20%",
        height: "25%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-3.5px"
        //this coming from ColorBox styles
      }
}

 function DraggableColorBox(props) {
  return (
    <div style = {{backgroundColor: props.color}}
    className={props.classes.root}>
      
    {props.color}</div>
  )
}
export default withStyles(styles)(DraggableColorBox)