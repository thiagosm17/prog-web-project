import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-4">
      <h2 className="text-xl font-bold">TrainLog</h2>
      <nav className="mt-4">
        <ul>
          <li className="mb-2"><Link to="/" className="hover:text-gray-400">Dashboard</Link></li>
          <li className="mb-2"><Link to="/register" className="hover:text-gray-400">Registrar Treino</Link></li>
          <li className="mb-2"><Link to="/models" className="hover:text-gray-400">Modelos de Treino</Link></li>
          <li className="mb-2"><Link to="/profile" className="hover:text-gray-400">Perfil</Link></li>
        </ul>
      </nav>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p className="mt-2">Aqui você verá seu progresso e treinos recentes.</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 bg-gray-100 p-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/register" element={<h2>Registrar Treino</h2>} />
            <Route path="/models" element={<h2>Modelos de Treino</h2>} />
            <Route path="/profile" element={<h2>Perfil</h2>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;