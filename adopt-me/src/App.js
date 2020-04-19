import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", { id: "something=important" }, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Otis",
      animal: "Cat",
      breed: "Street",
    }),
    React.createElement(Pet, {
      name: "Jeff",
      animal: "Dog",
      breed: "Sheperd",
    }),
    React.createElement(Pet, {
      name: "Boink",
      animal: "Cat",
      breed: "Mixed",
    }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));
