import React from "react";

function Header() {
  return (
    <header style={headerStyle}>
      <h1>Todolist</h1>
    </header>
  );
}

const headerStyle = {
  background: "green",
  textAlign: "center",
  padding: "10px",
  color: "yellow",
};

export default Header;
