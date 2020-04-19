const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed),
  ]);
};

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

ReactDOM.render(React.createElement(App), document.getElementById("root"));
