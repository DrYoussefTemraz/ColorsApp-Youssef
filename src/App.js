import React, { Component } from "react";
import Palette from "./Palette";
import seedColors from "./seedColors";
import PaletteList from "./PaletteList";
import { generatePalette } from "./colorHelpers";
import { Route, Routes, useParams } from "react-router-dom";

class App extends Component {
  findPalette(id) {
    return seedColors.find((palette) => palette.id === id);
  }

  render() {
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
