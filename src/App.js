import React from 'react'
import Home from './Home';
import './App.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/denemeiki" element={<denemeiki />} />
          <Route path="/deneme" element={<deneme />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
