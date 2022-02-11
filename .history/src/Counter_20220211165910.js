import React, { useState } from "react";
import { render } from "react-dom";
import { connect }

class Counter extends React.Component {
};
render() {
  return (
    <div className="counter">
      <h2>Counter</h2>
      <div>
        <button onClick={this.decrement}>-</button>
        <span className="count">{
          ...this.props.count
        }
          </span>
        <button onClick={this.increment}>+</button>
      </div>
    </div>
  );
}
}
export default Counter;
