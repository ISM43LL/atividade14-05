import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import ValidarCPF from './pages/validarCpf';
import RotaPrivada from './components/rota';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ValidarCPF />} />
        <Route path="/formulario" element={
          <RotaPrivada>
            <Home />
          </RotaPrivada>
        } />
      </Routes>
    </Router>
  );
}

export default App;
