import React from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoginScreen from './screens/LoginScreen';

function App() {
  const user = null;

  return (
    <div className="app">
      

      <Router>
            {!user ? (<LoginScreen />) :(
              <Routes>
                <Route path="/test" element={<h1>hello</h1>} />
                <Route exact path="/" element={<HomeScreen />} />
              </Routes>
            )}
      </Router>
    </div>
  );
}

export default App;
