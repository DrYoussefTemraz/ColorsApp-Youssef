import React, { Component } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Snackbar from "@mui/material/Snackbar";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
// import CloseIcon from "@mui/material/closeIcon";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./Navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      format: "hex",
      open: false,
    };
    this.handleFormatChange = this.handleFormatChange.bind(this);
    this.closeSnackbar = this.closeSnackbar.bind(this);
  }
  handleFormatChange(e) {
    this.setState({ format: e.target.value, open: true });
    this.props.handleChange(e.target.value);
  }
  closeSnackbar() {
    this.setState({ open: false });
  }
  render() {
    const { level, changeLevel, showingAllcolors } = this.props;
    const { format } = this.state;

    return (
      <header className="Navbar">
        <div className="logo">
          <Link to="/">Youssef React Color App</Link>
        </div>
        {showingAllcolors && (
          <div className="slider-container">
            <span>level: {level}</span>
            <div className="slider">
              <Slider
                defaultValue={level}
                min={100}
                max={900}
                step={100}
                onChangeComplete={changeLevel}
              />
            </div>
          </div>
        )}
        <div className="select-container">
          <Select value={format} onChange={this.handleFormatChange}>
            <MenuItem value="hex">HEX: #eedd86 </MenuItem>
            <MenuItem value="rgb">rgb(255,255,255,255) </MenuItem>
            <MenuItem value="rgba">rgba(255,255,255,255,0.1)</MenuItem>
          </Select>
        </div>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          open={this.state.open}
          autoHideDuration={3000}
          message={
            <span id="message-id">
              Format changed to {format.toLocaleUpperCase()}
            </span>
          }
          ContentProps={{ "aria-describedby": "message-id" }}
          onClose={this.closeSnackbar}
          action={[
            <IconButton
              color="inherit"
              size="small"
              key="close"
              aria-label="close"
              onClick={this.closeSnackbar}
            >
              CLOSE
            </IconButton>,
          ]}
        />
      </header>
    );
  }
}
export default Navbar;
