import logo from './logo.svg';
import App from './App';
import {Routes, Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/escort" element={<Home />} />
        <Route path="/inscription" element={<Home />} />
      </Routes>
      
    </div>
  );
}

export default App;
