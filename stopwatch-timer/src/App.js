import './App.css';
import React from 'react';
import useTimer from './components/Stopwatch/useTimer';

const App = () => {
  
  return (
    <div className="app">
      <useTimer />
    </div>
  );
}

export default App;
