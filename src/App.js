import React, { useState } from "react";
import Menu from "./Menu";
import { Items } from "./Item";
import "./App.css";

function App() {
  const [state, setState] = useState({ openAt: undefined });

  const handleClick = (e) => {
    if (e.nativeEvent.which === 1) {
      setState({ ...state, openAt: undefined });
    } else if (e.nativeEvent.which === 3) {
      e.preventDefault();
      setState({ ...state, openAt: { left: e.clientX, top: e.clientY } });
    }
  };

  return (
    <div className="App" onClick={handleClick} onContextMenu={handleClick}>
      <div id="sheet">
        {state.openAt && <Menu items={Items} openAt={state.openAt} />}
        <div id="status-bar">Building a context menu in react</div>
      </div>
    </div>
  );
}

export default App;
