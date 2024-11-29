import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Users } from './PAGES/Users';
 // Certifique-se de importar o arquivo correto
import './App.css'; // ou o arquivo css onde você coloca o Tailwind

function App() {
  return (
    <Router>
      <div>
        <nav className="bg-blue-500 p-4">
          <ul className="flex space-x-4">
            <li>
              <a href="/users" className="text-white font-bold">Usuários</a>
            </li>
            {/* Você pode adicionar outras rotas aqui */}
          </ul>
        </nav>

        <div className="p-4">
          <Routes>
            <Route path="/users" element={<Users />} />
            {/* Adicione outras rotas aqui */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
