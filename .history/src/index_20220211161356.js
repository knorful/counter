import React from "react";
import { render } from "react-dom";
import Counter from "./Counter";
import "./index.css";
import { createStore } from 'redux';


function const initialState = {}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case (state, action) {}:
    return { ...state, ...payload }

  default:
    return state
  }
}

const store = createStore();

const App = () => (
  <div>
    <Counter />
  </div>
);

render(<App />, document.getElementById("root"));
