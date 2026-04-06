import logo from './logo.svg';
import './App.css';
import TodoRowItem from './components/TodoRowItem';
import TodoRowItem2 from './components/TodoRowItem2';

function App() {

  const todos = [{rowNumber: 5, rowDescription: "Feed puppy", rowAssigned: "User 1"},
    {rowNumber: 6, rowDescription: "Water plants", rowAssigned: "User 2"},
    {rowNumber: 7, rowDescription: "Water dinner", rowAssigned: "User 3"}
  ]

  return (
        <div className = "mt-5 container"> 
          <div className = "card">
            <div className = "card-header">
              Your Todo's
              </div>
              <div className = "card-body">
                <table className = "table table-hover">
                <thead>
                  <tr>
                    <th scope = 'col'>#</th>
                    <th scope = 'col'>Description</th>
                    <th scope = 'col'>Assigned</th>
                    </tr>
                  </thead>
                  <tbody>
                    <TodoRowItem
                    />
                    <TodoRowItem2/>
                    <tr>
                      <th scope = 'col'>3</th>
                      <td>Feed dog</td>
                      <td>Panos</td>
                      </tr>
                      <tr>
                        <th scope = 'col'>4</th>
                        <td>Get haircut</td>
                        <td>Eric</td>
                        </tr>
                         <TodoRowItem
                    rowNumber = {todos[0].rowNumber}
                    rowDescription = {todos[0].rowDescription}
                    rowAssigned = {todos[0].rowAssigned}
                    />
                                             <TodoRowItem
                    rowNumber = {todos[1].rowNumber}
                    rowDescription = {todos[1].rowDescription}
                    rowAssigned = {todos[1].rowAssigned}
                    />
                                             <TodoRowItem
                    rowNumber = {todos[2].rowNumber}
                    rowDescription = {todos[2].rowDescription}
                    rowAssigned = {todos[2].rowAssigned}
                    />
                    </tbody>
                </table>
                </div>
            </div>
        </div>
  );
}

export default App;
