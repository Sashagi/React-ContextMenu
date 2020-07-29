import React, { Component } from "react";
import Menu from "./Menu";
import { Items } from "./Item";
import "./new.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      Items,
      xPos: "0px",
      yPos: "0px",
      showMenu: false,
    };
  }

  componentDidMount() {
    document.addEventListener("click", this.handleClick);
    document.addEventListener("contextmenu", this.handleContextMenu);
  }
  componentWillUnmount() {
    document.removeEventListener("click", this.handleClick);
    document.removeEventListener("contextmenu", this.handleContextMenu);
  }
  handleClick = (e) => {
    if (this.state.showMenu) this.setState({ showMenu: false });
  };
  handleContextMenu = (e) => {
    e.preventDefault();

    this.setState({
      xPos: `${e.pageX}px`,
      yPos: `${e.pageY}px`,
      showMenu: true,
    });
  };

  render() {
    const { showMenu, xPos, yPos } = this.state;
    if (showMenu)
      return (
        <ul
          className="menu"
          style={{
            top: yPos,
            left: xPos,
          }}
        >
          <Menu items={this.state.Items} />
        </ul>
      );
    else return null;
  }
}
