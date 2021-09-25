import './App.css';
import Header from './Cpmponents/Header/Header';
import Courses from './Cpmponents/Courses/Courses'

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Header></Header>
        <div>
          <Courses></Courses>
        </div>
      </div>
    </div>
  );
}

export default App;
