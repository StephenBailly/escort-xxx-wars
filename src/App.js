import "./App.css";
import { useEffect } from "react";
import ContactForm from "./components/requestForm.js";

function App() {
  

  return (
    <div className="App">
      <header className="App-header">
        
        <div className="py-6">
          <ContactForm />
        </div>
      </header>
    </div>
  );
}



export default App;
