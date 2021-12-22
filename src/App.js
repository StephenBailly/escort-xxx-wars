import NavBar from './components/NavBar'
import {Routes, Route} from 'react-router-dom'
import Escorts from './components/Escorts'
import Accueil from './components/Accueil'
import ContactForm from "./components/requestForm";
import "./App.css";
import { useEffect } from "react";


function App() {
  return (
    <div className="App">

      <header>
      <NavBar/>

        <Routes>
          <Route path="/" element={<Accueil />} /> 
          <Route path="/Escorts" element={<Escorts />} />
         <Route path="/requestForm" element={<requestForm />} />
        </Routes>
        
      </header>

    </div>
  );
}



export default App;
