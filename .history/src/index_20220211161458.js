import React from "react";
import { render } from "react-dom";
import Counter from "./Counter";
import "./index.css";
import { createStore } from 'redux';


function reducer(state, action) {
  console.log('reducer', state, action);
}
const store = createStore();

const App = () => (
  <div>
    <Counter />
  </div>
);

render(<App />, document.getElementById("root"));
