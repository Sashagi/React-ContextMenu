import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
// import CustomDropDown from "./CustomDropdown";
// import "bootstrap/dist/css/bootstrap.min.css";

// import "./styles.css";

const dropdownConfig = [
  {
    id: 1,
    options: [
      { title: "Submenu 1", header: true },
      { title: "Submenu 1.1", header: false },
    ],
    name: "dropdownOpen1",
  },
  {
    id: 2,
    options: [
      { title: "Submenu 2", header: true },
      { title: "Submenu 2.1", header: false },
    ],
    name: "dropdownOpen2",
  },
  {
    id: 3,
    options: [
      { title: "Submenu 3", header: true },
      { title: "Submenu 3.1", header: false },
    ],
    name: "dropdownOpen3",
  },
];

function App() {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  //   const [keysForDropdown, setKeysForDropdown] = useState({});

  //   useEffect(() => {
  //     const keys = dropdownConfig.map((dropdown) => dropdown.name);
  //     const object = keys.reduce((acc, curr) => {
  //       acc[curr] = false;
  //       return acc;
  //     }, {});

  //     setKeysForDropdown({ ...object });
  //   }, []);

  //   const _handleToggle = (e) => {
  //     setKeysForDropdown({
  //       ...keysForDropdown,
  //       [e.target.name]: !keysForDropdown[e.target.name],
  //     });
  //     console.log("keysForDropdown");
  //   };

  //   const _handleMouseEnter = (e) => {
  //     setKeysForDropdown({
  //       ...keysForDropdown,
  //       [e.target.name]: !keysForDropdown[e.target.name],
  //     });
  //   };

  //   const _handleMouseLeave = (e) => {
  //     setKeysForDropdown({
  //       ...keysForDropdown,
  //       [e.target.name]: !keysForDropdown[e.target.name],
  //     });
  //   };

  return (
    <div className="App">
      <div>
        {
          // keysForDropdown &&
          dropdownConfig.map((dropdown) => (
            <div
              {...dropdown}
              key={dropdown.id}
              onMouseOver={() => toggle(!open)}
              //   statekeys={keysForDropdown}
              //   //   onToggle={_handleToggle}
              //   onMouseEnter={_handleMouseEnter}
              //   onMouseLeave={_handleMouseLeave}
            >
              {dropdown.name}
              <div>
                {open &&
                  dropdown.options.map((i) => <div key={i.id}>{i.title}</div>)}
              </div>
              --------------- hello
            </div>
          ))
        }
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
