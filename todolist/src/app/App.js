import { Nav } from "../componets/Nav.jsx"
import AddTodo from "../componets/AddTodo.jsx"
import TodoList from "../componets/TodoList.jsx"
import { useState } from "react"
import data from "../mockData"
import { v4 as uuidv4 } from "uuid";

function App() {

  const [todos, setTodos] = useState(data);

  const [task, setTask] = useState("");

  const handleCheckTodo = (id) => {
   console.log("idddddddd",id);
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          checked: !todo.checked,
        };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const handleChange = (e) => {
    const { value } = e.target ;
    setTask(value);
  };
  
  
const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };
// const handleDelete = () => {
//     const updatedTodos = todos.map((todo) => todo);
//     setTodos(updatedTodos);
    
//   };

  const completed = () => {
        const updatedTodos = todos.filter((todo) => todo.checked === true );
    setTodos(updatedTodos);
  }



  const handleAddTodo = (task) => {
    
    localStorage.setItem('todos', task);
    
    
    if (task !== "") {
      
      const todo = {
        id: uuidv4(),
        checked: false,
        task:task
      }
      const updatedTodos = [...todos, todo];
      setTodos(updatedTodos);
      console.log(updatedTodos)
      setTask("");
    }       
    
    // localStorage.setItem('todos', JSON.stringify(task))
    // var todos = localStorage.getItem('todos')
    
    
    return
  };


  return (
    <div className="App">
      <div>
        <Nav completed={completed}/>
      </div>
      <div><AddTodo task={task} handleAddTodo={handleAddTodo} setTask={setTask} handleChange={handleChange} /></div>
      <div>
        <TodoList data={todos} handleDeleteTodo={handleDeleteTodo} handleCheckTodo={handleCheckTodo}  />
      </div>
    </div>
  );
}

export default App;
