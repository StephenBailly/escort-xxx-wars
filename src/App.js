
import NavBar from './components/NavBar'
import {Routes, Route} from 'react-router-dom'
import Escorts from './components/Escorts'
import Footer from './components/Footer'
import "./App.css"

function App() {
  return (
    <div className="App">

      <header>
      <NavBar/>

        <Routes>
          {/* <Route path="./" element={<Accueil />} /> */}
          <Route path="/Escorts" element={<Escorts />} />
          {/* <Route path="/Inscriptions" element={<Inscription />} /> */}
        </Routes>
      </header>

      <footer>
        <Footer/>
      </footer>

    </div>
  );
}

export default App;
