import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './router/routes';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <main className="app-container" >
        <Routes />
      </main>
    </BrowserRouter>
  );
}

export default App;
