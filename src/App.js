import NavBar from './components/NavBar'
import {Routes, Route} from 'react-router-dom'
import Escorts from './components/Escorts'
import Accueil from './components/Accueil'
import Inscription from "./components/requestForm";
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
         <Route path="/requestForm" element={<requestForm />} />
        </Routes>
      </header>

      <footer>
        <Footer/>
      </footer>

    </div>
  );
}

export default App;
