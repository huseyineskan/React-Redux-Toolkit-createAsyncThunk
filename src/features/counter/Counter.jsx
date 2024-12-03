import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
  countReset,
} from "./counterSlice";

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState(0);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      You can increase or decrease it according to the entered value.
      <div style={{}}>
        <button onClick={() => dispatch(decrementByAmount(Number(inputValue)))}>
          -
        </button>
        <input
          value={Number(inputValue)}
          onChange={handleInputChange}
          style={{ margin: "0 20px" }}
          type="number"
        />
        <button onClick={() => dispatch(incrementByAmount(Number(inputValue)))}>
          +
        </button>
      </div>
      <p>
        OR <br />
        You can increase or decrease it one by one.
      </p>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(decrement())}
        >
          -1 Increment
        </button>

        <button
          style={{ margin: "0 20px", background: "#bbbefc", width: "100px" }}
        >
          {count}
        </button>

        <button
          aria-label="Decrement value"
          onClick={() => dispatch(increment())}
        >
          +1 Increment
        </button>
      </div>
      <div style={{ marginTop: "100px" }}>
        <button
          className="reset-btn"
          onClick={() => {
            dispatch(countReset());
            setInputValue(0);
          }}
        >
          Reset Counter
        </button>
      </div>
    </div>
  );
}

export default Counter;
