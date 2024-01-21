import React, { Component } from "react";
import ColorBox from "./colorBox";
import "rc-slider/assets/index.css";
import "./Palette.css";
import Slider from "rc-slider";
class Pallete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 500,
    };
    this.changeLevel = this.changeLevel.bind(this);
  }
  changeLevel(level) {
    this.setState({ level });
    console.log(level);
  }
  render() {
    const { colors } = this.props.palette;
    const { level } = this.state;
    // we will use slider liberary to make the levels change from 50 to 900 "npm install --save rc-slider"
    const colorBoxes = colors[level].map((color) => (
      // background having key of color and value of name which been passed to coloBox component
      <ColorBox background={color.hex} name={color.name} />
    ));
    return (
      <div className="Palette">
        <div className="slider">
          <Slider
            defaultValue={level}
            min={100}
            max={900}
            step={100}
            onChangeComplete={this.changeLevel}
          />
        </div>
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
