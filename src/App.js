
import NavBar from './components/NavBar'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">

      <header>
      <NavBar/>

        {/*<Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/Escorts" element={<Escorts />} />
          <Route path="/Inscriptions" element={<Inscription />} />
        </Routes>*/}
        
      </header>

    </div>
  );
}

export default App;
