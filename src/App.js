import React, {useState} from "react"
import logo from './logo.svg';
import './App.css';
import TodoRowItem from './components/TodoRowItem';
import TodoRowItem2 from './components/TodoRowItem2';
import TodoTable from './components/TodoTable';
import NewTodoForm from "./components/NewTodoForm";

function App() {

  const [showAddTodoForm, setShowAddTodoForm] = useState(false)

  const [todos, setTodos] = useState( [{rowNumber: 5, rowDescription: "Feed puppy", rowAssigned: "User 1"},
    {rowNumber: 6, rowDescription: "Water plants", rowAssigned: "User 2"},
    {rowNumber: 7, rowDescription: "Water dinner", rowAssigned: "User 3"},
    {rowNumber: 8, rowDescription: "Charge phone battery", rowAssigned: "User 4"}
  ])

  const addTodo = (description, assigned) => {
    let rowNumber = 0
    if(todos.length > 0)
    {
      rowNumber = todos[todos.length - 1].rowNumber + 1
    }
    else
    {
      rowNumber = 1
    }
      const newTodo =
      {
        rowNumber: rowNumber,//8 + todos.length - 3,
        //rowDescription: "New Todo " + String(0 + todos.length - 3),
        //rowAssigned: "User " + String(4 + todos.length - 3)//,
        rowDescription: description,
        rowAssigned: assigned
      }
      //todos.push(newTodo)
      setTodos(todos => [...todos, newTodo])
      console.log("Clicked!")
      console.log("newTodo added to the list!")
      console.log(todos)
  }

  const deleteTodo = (deleteTodoRowNumber) => {
   let filtered = todos.filter(function (value)
  {
    return value.rowNumber !== deleteTodoRowNumber
  })
  setTodos(filtered)
  }

  return (
        <div className = "mt-5 container"> 
          <div className = "card">
            <div className = "card-header">
              Your Todo's
              </div>
              <div className = "card-body">
              <TodoTable todos = {todos} deleteTodo = {deleteTodo}/>
              <button onClick = {() => setShowAddTodoForm(!showAddTodoForm)} className = "btn btn-primary me-2" /*onClick = {addTodo}*/>
                {showAddTodoForm ? "Close New todo" : "New Todo"}
              </button>
              <button className = "btn btn-primary" onClick =  {() => {console.log("Clicked!")}}>
                Action
              </button>
              </div>
              {showAddTodoForm && 
                <NewTodoForm addTodo = {addTodo}/>
              }
            </div>
        </div>
  );
}

export default App;
