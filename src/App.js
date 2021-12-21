import logo from './logo.svg';
import App from './App';
import {Routes, Route} from 'react-router-dom'

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
