import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App"> 
        <p>Learning React right now!</p>
        <p>My name is Panos!</p>
        <div>
          <div>
            <div>
              <th scope = 'col'>Your Todo's</th>
              </div>
              <div>
                <table>
                <thead>
                  <tr>
                    <th scope = 'col'>#</th>
                    <th scope = 'col'>Description</th>
                    <th scope = 'col'>Assigned</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope = 'row'>1</th>
                      <td>Feed dog</td>
                      <td>Panos</td>
                      </tr>
                      <tr>
                        <th scope = 'col'>2</th>
                        <td>Get haircut</td>
                        <td>Eric</td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
