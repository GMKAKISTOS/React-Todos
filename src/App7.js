import logo from './logo.svg';
import './App.css';
import TodoRowItem from './components/TodoRowItem';
import TodoRowItem2 from './components/TodoRowItem2';
import TodoTable from './components/TodoTable';

function App() {

  const todos = [{rowNumber: 5, rowDescription: "Feed puppy", rowAssigned: "User 1"},
    {rowNumber: 6, rowDescription: "Water plants", rowAssigned: "User 2"},
    {rowNumber: 7, rowDescription: "Water dinner", rowAssigned: "User 3"},
    {rowNumber: 8, rowDescription: "Charge phone battery", rowAssigned: "User 4"}
  ]

  const addTodo = () => {
    if(todos.length > 0)
    {
      const newTodo =
      {
        rowNumber: 8 + todos.length - 3,
        rowDescription: "New Todo",
        rowAssigned: "User 9"
      }
      todos.push(newTodo)
      console.log("Clicked!")
      console.log("newTodo added to the list!")
      console.log(todos)
    }
  }

  return (
        <div className = "mt-5 container"> 
          <div className = "card">
            <div className = "card-header">
              Your Todo's
              </div>
              <div className = "card-body">
              <TodoTable todos = {todos}/>
              <button className = "btn btn-primary" onClick = {addTodo}>
                Action
              </button>
              <div>
              <button className = "btn btn-primary" onClick =  {() => {console.log("Clicked!")}}>
                Action2
              </button>
              </div>
                </div>
            </div>
        </div>
  );
}

export default App;
