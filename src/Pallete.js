import React, { Component } from "react";
import ColorBox from "./colorBox";
import "./Palette.css";
class Pallete extends Component {
  render() {
    const colorBoxes = this.props.colors.map((color) => (
      // background having key of color and value of name which been passed to coloBox component
      <ColorBox background={color.color} name={color.name} />
    ));
    return (
      <div className="Palette">
        {/* Navbar goes here */}
        <div className="Palette-colors">
          {colorBoxes}
          {/* bunch of color boxes */}
        </div>
        {/* footer goes here */}
      </div>
    );
  }
}
export default Pallete;
