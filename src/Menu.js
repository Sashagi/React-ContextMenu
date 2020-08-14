import React, { useState, useEffect, useRef } from "react";
import MenuItem from "./MenuItem";
// import { moveInside } from "./layout";

//
// A menu renders a list of items at the given position (openAt).
//
export default function (props) {
  const { items, openAt } = props;
  const style = { left: openAt.left, top: openAt.top };

  const [state, setState] = useState({
    active: undefined,
    submenuDirection: "right",
  });

  const mouseLocs = [];
  var lastDelayLoc;
  var timeoutId;

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseLocs.push({ x: e.pageX, y: e.pageY });
      if (mouseLocs.length > 3) {
        mouseLocs.shift();
      }
    };
    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, [mouseLocs]);

  useEffect(() => {
    const elem = ref.current;
    const { top, left } = elem.getBoundingClientRect();

    const offsetHeight = elem.offsetHeight;
    const offsetWidth = elem.offsetWidth;

    const clientWidth = document.documentElement.clientWidth;
    const clientHeight = document.documentElement.clientHeight;

    if (clientWidth - left < offsetWidth) {
      elem.style.left = left - offsetWidth + "px";
      setState({ ...state, submenuDirection: "left" });
    }
    if (clientWidth - left > offsetWidth) {
      setState({ ...state, submenuDirection: "right" });
    }

    if (clientHeight - top < offsetHeight) {
      elem.style.top = top - offsetHeight + "px";
    }
  }, [openAt]);

  const ref = useRef(null);

  const getRect = () => {
    const el = ref.current;
    if (el) {
      const style = getComputedStyle(el);
      return {
        offset: { top: el.offsetTop, left: el.offsetLeft },
        outer: {
          height:
            el.offsetHeight +
            parseInt(style.marginTop) +
            parseInt(style.marginBottom),
          width:
            el.offsetWidth +
            parseInt(style.marginLeft) +
            parseInt(style.marginRight),
        },
      };
    }
    return {};
  };

  const handleMouseLeave = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = undefined;
    }
  };

  const setActive = (item) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = undefined;
    }
    possiblyActivate(item);
  };

  const possiblyActivate = (item) => {
    const delay = activationDelay();

    if (delay) {
      timeoutId = setTimeout(() => {
        possiblyActivate(item);
      }, delay);
    } else {
      setState({ ...state, active: item });
    }
  };

  const activationDelay = () => {
    if (!state.active || !state.active.items || !getRect().offset) {
      return 0;
    }

    const { submenuDirection } = state;
    const { offset, outer } = getRect();
    const tolerance = 75;
    const upperLeft = { x: offset.left, y: offset.top - tolerance };
    const upperRight = { x: offset.left + outer.width, y: upperLeft.y };
    const lowerLeft = {
      x: offset.left,
      y: offset.top + outer.height + tolerance,
    };
    const lowerRight = { x: offset.left + outer.width, y: lowerLeft.y };
    const loc = mouseLocs[mouseLocs.length - 1];
    const prevLoc = mouseLocs[0];

    if (!loc) {
      return 0;
    }

    if (
      prevLoc.x < offset.left ||
      prevLoc.x > lowerRight.x ||
      prevLoc.y < offset.top ||
      prevLoc.y > lowerRight.y
    ) {
      return 0;
    }

    if (lastDelayLoc && loc.x === lastDelayLoc.x && loc.y === lastDelayLoc.y) {
      return 0;
    }

    function slope(a, b) {
      return (b.y - a.y) / (b.x - a.x);
    }

    let decreasingCorner = upperRight;
    let increasingCorner = lowerRight;

    if (submenuDirection === "left") {
      decreasingCorner = lowerLeft;
      increasingCorner = upperLeft;
    } else if (submenuDirection === "below") {
      decreasingCorner = lowerRight;
      increasingCorner = lowerLeft;
    } else if (submenuDirection === "above") {
      decreasingCorner = upperLeft;
      increasingCorner = upperRight;
    }

    const decreasingSlope = slope(loc, decreasingCorner);
    const increasingSlope = slope(loc, increasingCorner);
    const prevDecreasingSlope = slope(prevLoc, decreasingCorner);
    const prevIncreasingSlope = slope(prevLoc, increasingCorner);

    if (
      decreasingSlope < prevDecreasingSlope &&
      increasingSlope > prevIncreasingSlope
    ) {
      lastDelayLoc = loc;
      return 100;
    }

    lastDelayLoc = null;

    return 0;
  };

  return (
    <div
      className="menu"
      ref={ref}
      style={style}
      onMouseLeave={handleMouseLeave}
    >
      {items.map((item) => (
        <MenuItem
          key={item.id}
          data={item}
          active={state.active && state.active.id === item.id}
          setActive={() => setActive(item)}
          submenuDirection={state.submenuDirection}
        />
      ))}
    </div>
  );
}
