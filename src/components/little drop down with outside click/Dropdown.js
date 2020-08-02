import React from "react";
import { useState } from "react";

function Dropdown({ title, items, multiSelect = false }) {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState([]);
  const toggle = () => setOpen(!open);

  function handleOnClick(item) {}
  return (
    <div>
      <div
        tabIndex={0}
        className="ha"
        role="button"
        onKeyPress={() => toggle(!open)}
        onClick={() => toggle(!open)}
      >
        <div className="dd-header__title">
          <p className="dd-header__title--bold">{title}</p>
        </div>
        <div className="dd-header__action">
          <p>{open ? "close" : "open"}</p>
        </div>
        {open && (
          <ul className="dd-list">
            {items.map((item) => (
              <li key={item.id} className="dd-list-item">
                <button type="button">
                  <span>{item.value}</span>
                  <span>Selected...</span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Dropdown;
