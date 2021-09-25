import './App.css';
import Header from './Cpmponents/Header/Header';
import Courses from './Cpmponents/Courses/Courses'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
        <div>
          <Courses/>
        </div>
      </header>
    </div>
  );
}

export default App;
