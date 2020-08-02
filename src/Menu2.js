import React, { Component } from "react";
import MenuItem from "./MenuItem";

export class Menu2 extends Component {
  render() {
    return this.props.items.map((item) => (
      <li key={item.id}>
        <MenuItem item={item} showSubmenu={this.props.showSubmenu} />
      </li>
    ));
  }
}

export default Menu2;
