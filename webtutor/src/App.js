import { Home } from "./pages/Home";
import { Quiz } from "./pages/Quiz";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    // Todas as páginas devem estar aqui dentro para validar a navegação
    <BrowserRouter>
      <Routes>
        {/* Rota para Home page */}
        <Route path="/" element={<Home />} />
        {/* Rota para tela de Quiz (teste) */}
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
