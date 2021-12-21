// import logo from './logo.svg';
import {Routes, Route} from "react-router-dom";
import Navbar from './components/NavBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar/>

        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/Escorts" element={<Escorts />} />
          <Route path="/Inscriptions" element={<Inscription />} />
        </Routes> 
        
      </header>
    </div>
  );
}

export default App;
