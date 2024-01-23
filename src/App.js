import React, { Component } from "react";
import Palette from "./Palette";
import seedColors from "./seedColors";
import PaletteList from "./PaletteList";
import { generatePalette } from "./colorHelpers";
import { Route, Routes, useParams } from "react-router-dom";
// import PaletteWrapper from "./PaletteWrapper";

class App extends Component {
  findPalette(id) {
    return seedColors.find((palette) => palette.id === id);
  }

  render() {
    // modification of code as it could be seperated to a component "PalwtteWrapper"
    const PaletteWrapper = () => {
      const { id } = useParams();
      const palette = generatePalette(this.findPalette(id));
      return <Palette palette={palette} />;
    };
    return (
      <Routes>
        <Route exact path="/" element={<PaletteList palettes={seedColors} />} />
        <Route exact path="/palette/:id" element={<PaletteWrapper />} />
      </Routes>
    );
  }
}
 
export default App;
