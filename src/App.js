import './App.css';
import Timer from './components/displayPanel/timer';
import BreakTime from './components/breakManager/breakManager';
import SessionTime from './components/sessionManager/sessionManager';

function App() {
  return (
    <div className="App">
      <div className='sidebar'>
        <SessionTime/>
        <BreakTime/>
      </div>
      <div className='main'>
        <Timer/>
      </div>
    </div>
  );
}

export default App;
