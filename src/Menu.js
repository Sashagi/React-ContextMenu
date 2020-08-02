import React, { Component } from "react";

export class Menu extends Component {
  render() {
    const { items } = this.props;
    return (
      <ul>
        {items.map((item, id) => (
          <li onMouseOver={this.props.showSubmenu.bind(this, id)} key={item.id}>
            {item.icon}
            {item.name}
            {item.img}
            {typeof item.subitems == "object" && item.showSubMenu ? (
              <ul>
                {item.subitems.map((subitem) => (
                  <div key={subitem.id}>
                    {subitem.icon}
                    {subitem.name}
                  </div>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ul>
    );
  }
}

export default Menu;
