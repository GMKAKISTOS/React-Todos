import logo from './logo.svg';
import './App.css';
import TodoRowItem from './components/TodoRowItem';
import TodoRowItem2 from './components/TodoRowItem2';

function App() {
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
                    <TodoRowItem/>
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
                    </tbody>
                </table>
                </div>
            </div>
        </div>
  );
}

export default App;
