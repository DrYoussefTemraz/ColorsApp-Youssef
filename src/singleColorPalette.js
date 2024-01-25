import React, { Component } from "react";
import { Link } from "react-router-dom";

class SingleColorPalette extends Component {
  render() {
    return (
      <>
        <div>SINGLE COLOR PALETTE for a component</div>;
        <Link to="/" onClick={(e) => e.stopPropagation()}>
          <span>back home</span>
        </Link>
      </>
    );
  }
}
export default SingleColorPalette;
