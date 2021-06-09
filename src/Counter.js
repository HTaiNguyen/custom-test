import React from "react";

class Counter extends React.Component {
  constructor() {
    this.state = { counter: 0 };
  }

  increment() {
    this.setState({
      counter: this.state.counter++,
    });
  }

  render() {
    return (
      <div>
        <p>{this.state.counter}</p>
        <button onClick={this.increment}>INCREMENT</button>
      </div>
    );
  }
}

export default Counter;
