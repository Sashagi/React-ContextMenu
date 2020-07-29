import React, { Component } from "react";

export class Menu extends Component {
  constructor(props) {
    super(props);
    this.liRefs = [];
  }
  showSubmenu = (e) => {
    // this.liRefs.current.style.display = "block";
    for (var i = 0; i < this.liRefs.length; i++) {
      this.liRefs[i].style.color = "red";
    }
    // console.log(this.liRefs[10]);
  };
  getStyle = (e) => {
    e.target.style.background = "red";
  };
  render() {
    return (
      <ul className="mainmenu">
        {this.props.items.map((i) =>
          i.subitems ? (
            <li key={i.id} onMouseOver={this.showSubmenu}>
              {i.icon}
              {i.name}
              <ul key={i.id} ref={(ref) => (this.liRefs[i.id] = ref)}>
                {i.subitems.map((item) => (
                  <div key={item.id} className="submenu">
                    {item.icon}
                    {item.name}
                  </div>
                ))}
              </ul>
            </li>
          ) : (
            <li key={i.id}>
              {i.icon}
              {i.name}
              {i.img}
            </li>
          )
        )}
      </ul>
    );
  }
}
export default Menu;
