import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
// import ProfilePage from './pages/ProfilePage';
// import Register from './pages/Register';
// import Login from './pages/Login';
// import RequiresAuth from './pages/Auth';
import Connect from './pages/Connect'
import Navbar from './components/Navbar'
import Solution from './pages/Solution'
import Career from './pages/Career'

function App() {
  return (
    <>
    
    <Router> 
    <Navbar/> 
      <Routes>
      <Route path="/" element={<Dashboard />} />
        <Route path="/home" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/solution" element={<Solution />} />
        <Route path="/career" element={<Career />} />
        <Route path="/connect" element={<Connect />} />
        {/* <Route path="/profile" element={<RequiresAuth><ProfilePage /></RequiresAuth>} /> */}
      </Routes>
    </Router>
    </>
  );
}

export default App;
