import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './router/routes';
import './App.css';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <main className="app-container" >
        <Navbar />
        <Routes />
      </main>
    </BrowserRouter>
  );
}

export default App;
