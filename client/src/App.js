import React, { Component } from 'react';
import { Routes, Route } from "react-router-dom";
import Login from './components/Login'
import Home from './components/Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="home" element={<Home />} />
        </Routes>
      </div>
      
    );
  }
}

export default App;
