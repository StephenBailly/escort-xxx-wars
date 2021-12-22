import NavBar from './components/NavBar'
import {Routes, Route} from 'react-router-dom'
import Escorts from './components/Escorts'
import Footer from './components/Footer'
import Accueil from './components/Accueil'
import EscortsDetails from './components/EscortsDetails'
import Inscription from "./components/requestForm.js";
import "./App.css";
import { useEffect } from "react";



function App() {
  return (
    <div className="App">
      <header className="App-header">
      <NavBar/>

      <Routes>
          <Route path="/" element={<Accueil />} /> 
          <Route path="/Escorts" element={<Escorts />} />
          <Route path="/Escorts/:id" element={<EscortsDetails/>} />
          <Route path="requestForm" element={<Inscription />} />
        </Routes>
      </header>

      <footer>
        <Footer/>
      </footer>

    </div>
  );
}

export default App;
