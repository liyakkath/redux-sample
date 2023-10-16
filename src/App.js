import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increase_count, decrease_count } from "./redux/counter/counterSlice";
import { change_color } from "./redux/color/colorSlice";

function App() {
  const count = useSelector((state) => state.count.value);
  const color = useSelector((state) => state.color.value);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch(increase_count());
  };
  const decrement = () => {
    dispatch(decrease_count());
  };
  const changeColor=()=>{
    dispatch(change_color())
  }
  return (
    <div className="App">
      <button onClick={increment}>Increment +</button>
      <div>Count :{count}</div>
      <button onClick={decrement}>Decrement -</button>

      <div>
        <span style={{ backgroundColor:`#${color}`}}>hii</span>
        <button onClick={changeColor}>change color</button>
      </div>
    </div>
  );
}

export default App;
