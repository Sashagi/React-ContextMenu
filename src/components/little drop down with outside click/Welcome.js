import React, { Component } from "react";

class Welcome extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }
  increment() {
    this.setState({ count: this.state.count + 1 }, () => {
      console.log("this.state.count", this.state.count);
    });
    console.log(this.state.count);
  }
  render() {
    const { count } = this.state;
    return (
      <div>
        <div>Count-{count}</div>
        <button onClick={() => this.increment()}>Click</button>
      </div>
    );
  }
}

export default Welcome;
