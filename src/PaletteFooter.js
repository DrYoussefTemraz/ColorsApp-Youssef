import React from "react";
function PaletteFooter(props) {
  //this is a functional component that not accepting "this"
  const { paletteName, emoji } = props;
  return (
    <footer className="Palette-footer">
      {paletteName}
      <span className="emoji">{emoji}</span>
    </footer>
  );
}
export default PaletteFooter;
