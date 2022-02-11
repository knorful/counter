import React, { useState } from "react";
import { render } from "react-dom";
import { connect } from 'react-redux';

class Counter extends React.Component {

increment = () => {
   this.props.increment();
 };

 decrement = () => {
   this.props.decrement();
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

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

const map
export default connect(mapStateToProps)(Counter);
