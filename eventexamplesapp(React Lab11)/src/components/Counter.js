// src/components/Counter.js
import React, { Component } from 'react';

class Counter extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleIncrement() {
    this.setState({ count: this.state.count + 1 });
    this.sayHello();
  }

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  sayHello() {
    alert("Hello! Keep clicking to increase the count.");
  }

  render() {
    return (
      <div className="component-box">
        <h2>Counter</h2>
        <p>Value: {this.state.count}</p>
        <button onClick={this.handleIncrement}>Increase</button>
        <button onClick={this.handleDecrement}>Decrease</button>
      </div>
    );
  }
}

export default Counter;
