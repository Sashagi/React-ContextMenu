import React from "react";
import Dropdown from "./Dropdown";
import "./App.scss";

const items = [
  {
    id: 1,
    value: "hellow",
  },
  {
    id: 2,
    value: "hellow",
  },
  {
    id: 3,
    value: "hellow",
  },
  {
    id: 4,
    value: "hellow",
  },
  {
    id: 5,
    value: "hellow",
  },
];

function App() {
  return (
    <div className="container">
      <Dropdown title="select item" items={items} />
    </div>
  );
}
export default App;
