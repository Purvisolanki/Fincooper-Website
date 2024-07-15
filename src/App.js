import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
// import ProfilePage from './pages/ProfilePage';
// import Register from './pages/Register';
// import Login from './pages/Login';
// import RequiresAuth from './pages/Auth';

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/about" element={<About />} />

        {/* <Route path="/profile" element={<RequiresAuth><ProfilePage /></RequiresAuth>} /> */}
      </Routes>
    </Router>
  );
}

export default App;
