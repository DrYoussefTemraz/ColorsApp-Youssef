import React, { Component } from "react";
import Palette from "./Palette";
import seedColors from "./seedColors";
import PaletteList from "./PaletteList";
import { generatePalette } from "./colorHelpers";
import { Route, Routes, useParams } from "react-router-dom";
import SingleColorPalette from "./singleColorPalette";
// import PaletteWrapper from "./PaletteWrapper";

class App extends Component {
  findPalette(id) {
    return seedColors.find((palette) => palette.id === id);
  }

  render() {
    // modification of code as it could be seperated to a component "PaletteWrapper"
    const PaletteWrapper = () => {
      const { id } = useParams();
      const palette = generatePalette(this.findPalette(id));
      return <Palette palette={palette} />;
    };
    const SingleColorPaletteWrapper = () => {
      const { paletteId, colorId } = useParams();
      const palette = generatePalette(this.findPalette(paletteId));
      return <SingleColorPalette palette={palette} colorId={colorId} />;
    };
    return (
      <Routes>
        <Route exact path="/" element={<PaletteList palettes={seedColors} />} />
        <Route exact path="/palette/:id" element={<PaletteWrapper />} />
        <Route
          exact
          path="/palette/:paletteId/:colorId"
          element={<SingleColorPaletteWrapper />}
        />
      </Routes>
    );
  }
}
 
export default App;
