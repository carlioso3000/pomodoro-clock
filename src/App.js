import './App.css';
import Timer from './components/displayPanel/timer';
import BreakTime from './components/breakManager/breakManager';
import SessionTime from './components/sessionManager/sessionManager';

function App() {
  return (
    <div className="App">
      <Timer/>
      <SessionTime/>
      <BreakTime/>
    </div>
  );
}

export default App;
