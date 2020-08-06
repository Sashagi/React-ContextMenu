import React, { Component } from "react";
import Menu from "./Menu";
import { Items } from "./Item";
import "./new.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      Items,
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
      showMenu: true,
    });
    const clickX = e.clientX;
    const clickY = e.clientY;
    const screenW = window.innerWidth;
    const screenH = window.innerHeight;
    const menuW = this.root.offsetWidth;
    const menuH = this.root.offsetHeight;
    const right = screenW - clickX > menuW;
    const left = !right;
    const bottom = screenH - clickY > menuH;
    const top = !bottom;

    if (right) {
      this.root.style.left = `${clickX}px`;
    }
    if (left) {
      this.root.style.left = `${clickX - menuW}px`;
    }
    if (bottom) {
      this.root.style.top = `${clickY}px`;
    }
    if (top) {
      this.root.style.top = `${clickY - menuH}px`;
    }
  };

  showSubmenu = (id) => {
    this.setState({
      Items: this.state.Items.map((item) => {
        if (item.id === id) {
          item.showSubMenu = true;
        } else {
          item.showSubMenu = false;
        }
        return item;
      }),
    });
  };

  render() {
    const { showMenu, Items } = this.state;
    if (showMenu)
      return (
        <ul
          ref={(ref) => {
            this.root = ref;
          }}
          className="menu"
          // style={{
          //   top: this.clickX,
          //   left: this.clickY,
          // }}
        >
          <Menu items={Items} showSubmenu={this.showSubmenu} />
        </ul>
      );
    else return null;
  }
}
