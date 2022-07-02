import './App.css';
import Home from './Home';
import Intro from './Intro';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Intro/>} />
        <Route path='Home' element={<Home/>}  />
      </Routes>
    </div>
  );
}

export default App;
