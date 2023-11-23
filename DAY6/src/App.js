import Person1 from './components/Person1';
import HOC from './components/HOC';
import './App.css';
import Person2 from './components/Person2';

function App() {
  return (
    <div className="App">
     <Person1/>
     <Person2/>
     <HOC/>
    </div>
  );
}

export default App;
