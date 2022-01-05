import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="bg-gray-200 min-h-screen">
      <header className="flex flex-wrap gap-x-5 place-content-center">
        <img src={logo} className="object-scale-down h-48 w-48" alt="logo" />
        <h1 className="text-2xl mt-5">
          Edit <code>src/App.tsx</code> and save to reload.
        </h1>
        <a
          className="mt-5 font-normal "
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
