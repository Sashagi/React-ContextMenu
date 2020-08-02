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
    const { item } = this.props;
    const { id } = item.id;
    return (
      <div onMouseOver={this.props.showSubmenu.bind(this, id)}>
        {item.icon}
        {item.name}
        {/* {item.img} */}
        {item.showSubMenu && (
          <ul
          // style={getStyle()}
          >
            {item.subitems.map((subitem) => (
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
