import './App.css';
import { Navbar, Accueil } from './Components';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
      <Route path="/accueil" element={<Accueil />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
