import NavBar from './components/NavBar'
import {Routes, Route} from 'react-router-dom'
import Escorts from './components/Escorts'
<<<<<<< HEAD
import Accueil from './components/Accueil'
=======
import "./App.css";
import { useEffect } from "react";
import ContactForm from "./components/requestForm.js";
>>>>>>> 2bc464a65f70ef81fcb03a1d5abe3628ab22b50e

function App() {
  return (
    <div className="App">
<<<<<<< HEAD

      <header>
      <NavBar/>

        <Routes>
          <Route path="/" element={<Accueil />} /> 
          <Route path="/Escorts" element={<Escorts />} />
         {/*<Route path="/Inscriptions" element={<Inscription />} />*/}
        </Routes>
        
=======
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div className="py-6">
          <ContactForm />
        </div>
>>>>>>> 2bc464a65f70ef81fcb03a1d5abe3628ab22b50e
      </header>

    </div>
  );
}



export default App;
