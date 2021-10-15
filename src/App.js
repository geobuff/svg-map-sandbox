import React from "react";
import './App.css';
import { SVGMap } from "@geobuff/svg-map";
import { WorldCountries } from "@geobuff/svg-maps";

const mapStyle = {
  height: "80vh",
  minWidth: "100%",
  fill: "#6dca94",
  margin: "12px",
};

function App() {
  const [map, setMap] = React.useState(WorldCountries);
  const [target, setTarget] = React.useState("");

  const mouseOver = (event) => {
    const name = event.currentTarget.getAttribute("name");
    setMap({
      ...map,
      paths: map.paths
        .map((x) => {
          if (x.name.toLowerCase() === name.toLowerCase()) {
            x.style = { "fill": "red" };
          };
          return x;
        })
    });
  };

  const mouseMove = (event) => {
    setTarget(event.currentTarget.getAttribute("name"));
  };

  const onMouseOut = (event) => {
    const name = event.currentTarget.getAttribute("name");
    setMap({
      ...map,
      paths: map.paths
        .map((x) => {
          if (x.name.toLowerCase() === name.toLowerCase()) {
            x.style = {};
          };
          return x;
        })
    });
    setTarget("");
  }

  return (
    <div className="App">
      <p>
        Current target: {target ? <p>{target}</p> : <p>...</p>}<p/>
      </p>
      <SVGMap map={map} mapStyle={mapStyle} onPathMouseOver={mouseOver} onPathMouseMove={mouseMove} onPathMouseOut={onMouseOut}/>
    </div>
  );
}

export default App;
