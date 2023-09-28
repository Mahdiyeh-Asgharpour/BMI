import './App.css';
import React from 'react';
import img from './h.jpg';
function App() {
  return (
    <div className='app'>
      <span>
        <img src={img} alt="React Image"  />
      </span>
      <span className='text'>
        <h1>BMI</h1>
        <h3>Height</h3>
        <input />
        <h3>Weight</h3>
        <input />
        <div className='btn'>
          <button>Calcute</button>
        </div>
        
      </span>

    </div>
  );
}

export default App;
