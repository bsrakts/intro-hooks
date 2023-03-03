import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/header.js';
import {
  Home, HookEffect, HookState
} from './pages';

function App() {
  return (
    <div className="App w-full bg-gray-900">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<HookEffect />} />
          <Route path="/detail" element={<HookState />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
