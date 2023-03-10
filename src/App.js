import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "./Slice/Mytodo";


function App() {
  const dispatch = useDispatch()
  const todoData = useSelector((state) => state)
  console.log(todoData);
  const MytodoData = todoData.todo.data
  if (todoData.todo.isLoading) {
    return <h1>Loading....</h1>
  }
  
  return (
    <div className="App">
    <button onClick={(e) => dispatch(fetchTodos())}>Fetch Todos</button>
    {MytodoData ? MytodoData.map((todos) => todos.title) : " <= Press the Button"}
    </div>
  );
}

export default App;
