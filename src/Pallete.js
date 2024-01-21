import React, { Component } from "react";
import ColorBox from "./colorBox";
import "./Palette.css";
import Navbar from "./Navbar";
import { Alert } from "@mui/material";
class Pallete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 500,
      format: "hex",
    };
    this.changeLevel = this.changeLevel.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
  }
  changeLevel(level) {
    this.setState({ level });
  }
  changeFormat(val) {
    this.setState({ format: val });
  }
  render() {
    const { colors } = this.props.palette;
    const { level, format } = this.state;
    // we will use slider liberary to make the levels change from 50 to 900 "npm install --save rc-slider"
    const colorBoxes = colors[level].map((color) => (
      // background having key of color and value of name which been passed to coloBox component
      <ColorBox background={color[format]} name={color.name} />
    ));
    return (
      <div className="Palette">
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          handleChange={this.changeFormat}
        />
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
