import React, { useRef } from "react";
import Menu from "./Menu";

//
// A menu item renders a name. It may have a list sub items, which should open
// when the user intends to (by mousing over).
//
export default function (props) {
  const { data, active, setActive, submenuDirection } = props;

  const style = { backgroundColor: active ? "#e4e6e8" : "white" };

  const ref = useRef(null);
  const openAt = () => {
    if (ref.current && submenuDirection === "right") {
      const top = ref.current.offsetTop;
      const left = ref.current.offsetLeft + ref.current.clientWidth;
      return { top, left };
    }
    if (ref.current && submenuDirection === "left") {
      const top = ref.current.offsetTop;
      const left = ref.current.offsetLeft - ref.current.clientWidth;
      console.log(left);
      return { top, left };
    }
    return undefined;
  };

  return (
    <div
      className="menu-item"
      style={style}
      ref={ref}
      onMouseEnter={() => setActive()}
    >
      {data.name}
      {data.icon}

      {active && openAt() && data.items && (
        <Menu openAt={openAt()} items={data.items} />
      )}
    </div>
  );
}
