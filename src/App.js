import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/header.js';
import {
  Home,
  HookEffect,
  HookState,
  HookMemo,
  HookRef
} from './pages';

function App() {
  return (
    <div className="App w-full bg-gray-900">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/hookstate" element={<HookState />} />
          <Route path="/hookeffect" element={<HookEffect />} />
          <Route path="/hookmemo" exact element={<HookMemo />} />
          <Route path="/hookref" exact element={<HookRef />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
