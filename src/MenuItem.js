import React, { Component } from "react";

export class MenuItem extends Component {
  // constructor(props) {
  //   super(props);
  // }
  // getStyle = () => {
  //   return {
  //     display: this.props.item.showSubMenu? "block":"none"
  //   };
  // };

  render() {
    const { id, icon, name, showSubMenu, subitems } = this.props.item;
    const onMouseOver = this.props.showSubmenu.bind(this, id);
    return (
      <div onMouseOver={onMouseOver}>
        {icon}
        {name}
        {/* {item.img} */}
        {showSubMenu && subitems && (
          <ul
          // style={getStyle()}
          >
            {subitems.map((subitem) => (
              <div key={subitem.id}>
                {subitem.icon}
                {subitem.name}
              </div>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default MenuItem;
