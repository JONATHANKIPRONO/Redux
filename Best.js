import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../Feature/counter";

const Best = () => {
  const sunday = useSelector((state) => state.counter.count);
  const dispatch = useDispatch
  return (
    <div>
      <p>{sunday}</p>
      <button onClick={()=>dispatch(increment)}>
        add
      </button>
      <button onClick={()=>dispatch(decrement)}>
        sub
      </button>
    </div>
  );
};

export default Best;
