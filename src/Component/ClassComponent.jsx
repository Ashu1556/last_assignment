import React, { Component } from "react";

export default class ClassComponent extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }
  handleclick = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  handleclick1 = () => {
    let data = this.state.counter;

    let data2 = 0;

    if (data < 0) {
      this.setState({ counter: data2 });
    } else {
      this.setState({ counter: this.state.counter - 1 });
    }
  };

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h2>ClassComponent</h2>
        <br></br>
        <span>
          <b>Counter:</b>
          <br></br>
          {this.state.counter}
        </span>
        <br />
        <button onClick={this.handleclick}>+</button> &nbsp;&nbsp;&nbsp;
        <button onClick={this.handleclick1}>-</button>
      </div>
    );
  }
}
