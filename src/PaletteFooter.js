import React from "react";
import styles from "./styles/PaletteFooterStyles";
import { withStyles } from "@mui/styles";

function PaletteFooter(props) {
  //this is a functional component that not accepting "this"
  const { paletteName, emoji, classes } = props;
  return (
    <footer className={classes.PaletteFooter}>
      {paletteName}
      <span className={classes.emoji}>{emoji}</span>
    </footer>
  );
}
export default withStyles(styles)(PaletteFooter);
