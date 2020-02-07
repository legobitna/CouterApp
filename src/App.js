import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./Counter";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const count = useSelector(state => state.count); // state == store 단 store 에 reducer 가 하나만 있을경우
  const boxes = useSelector(state => state.boxes);
  const dispatch = useDispatch();
  const renderCounter = () =>
    boxes && boxes.map((color, idx) => <Counter id={idx} />);

  const handleChange = e => {
    dispatch({ type: "CHANGECOLOR", payload: e });
  };
  console.log(boxes);
  return (
    <div className="App">
      <div>
      <div style={{ fontSize: 30 }}>{count}</div>
      <button
        style={{ marginRight: 20 }}
        onClick={() => dispatch({ type: "INCREMENT" })}
      >
        Increment
      </button>
      <button
        style={{ marginRight: 20 }}
        onClick={() => dispatch({ type: "DECREMENT" })}
      >
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "RESET" })}>reset</button>
      <input type="text" onChange={e => handleChange(e.target.value)} />
      </div>
      <div className="boxes">{renderCounter()}</div>
    </div>
  );
}

export default App;
