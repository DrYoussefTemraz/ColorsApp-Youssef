import React, { Component } from "react";
import Palette from "./Pallete";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";
import { Route, Routes } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Routes>
        <Route
          exact
          path="/"
          Component={() => <h1>PALETTE LIST GOES HERE</h1>}
        />
        <Route
          exact
          path="/palette/:id"
          Component={() => <h1>INDIVIDUAL PALETTE</h1>}
        />
      </Routes>
      // <div>
      //   <Palette palette={generatePalette(seedColors[4])} />
      // </div>
    );
  }
}
 
export default App;
