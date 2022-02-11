import React from "react";
import { render } from "react-dom";
import Counter from "./Counter";
import "./index.css";
import { createStore } from 'redux';

const initialState = {
  count: 0
};

function reducer(state, action) {
  console.log('reducer', state, action);

  switch(action.type) {
    case 'INCREMENT':
  }
  return state;
}
const store = createStore(reducer);
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
store.dispatch({ type: "RESET" });

const App = () => (
  <div>
    <Counter />
  </div>
);

render(<App />, document.getElementById("root"));
