import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Counter.css"
export default function Counter(props) {
  const dispatch = useDispatch();
  const background = useSelector(state => state.background);
  const singleColor = useSelector(state => state.boxes[props.id]);

  const handleChange = e => {
    dispatch({
      type: "SINGLECOLOR",
      payload: { id: props.id, singleColor: e }
    });
  };
  return (
    <div className="box" style={{ backgroundColor: singleColor === "" ? background : singleColor}}>
      Colorful Box
      <input type="text" onChange={e => handleChange(e.target.value)}></input>
    </div>
  );
}
