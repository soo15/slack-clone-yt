import logo from './logo.svg';
import './App.css';
import Home from './componets/home';
import Profile from './componets/profile';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
 
function App() {
  return (
    <BrowserRouter>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
    </nav>
    <Routes>
      <Route to="/" exact element={<Home/>}/>
      <Route to="/home" element={<Home/>}/>
      <Route to="/profile" element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
