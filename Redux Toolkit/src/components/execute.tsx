import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../App/store/store.tsx";
import {
  increment,
  decrement,
  incrementBy10,
  decrementBy10,
  incrementByValue,
} from "../App/store/counterSlice/Features.tsx";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>incrementBy1</button>
      <button onClick={() => dispatch(incrementBy10())}>incrementBy10</button>
      <button onClick={() => dispatch(decrement())}>decrement1</button>
      <button onClick={() => dispatch(decrementBy10())}>decrementBy10</button>
      <button onClick={() => dispatch(incrementByValue(100))}>incrementByValue</button>
    </div>
  );
};

export default Counter;
