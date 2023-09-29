import './App.css';
import React from 'react';
import img from './h.jpg';
import {useState} from "react";
function App() {
  const [height,setHeight]=useState(0);
  const [weight,setWeight]=useState(0);
  const [errorweight,setErrorWeight]=useState("");
  const [errorheight,setErrorHeight]=useState("");
  const [hheight,setHheight]=useState(0);
  const [calcuute,setCalcuute]=useState(0);


  const handleh=(event)=>{
    
    setHeight(event.target.value) ;
   
  }
  const handlew=(event)=>{
    
    setWeight(event.target.value) ;
  }
  const calcute=()=>{
    
    height>99 ? setHheight((height*height)/10000):setErrorHeight("Your number is cm");
    weight>20 ? setCalcuute(weight/hheight):setErrorWeight("Your number is kg");
    
    console.log(calcuute);
    document.getElementById("result").innertext=calcuute;
    

  }
  return (
    <div className='app'>
      <span>
        <img src={img} alt="React Image"  />
      </span>
      <span className='text'>
        <h1>BMI</h1>
        <h3>Height</h3>
        <input id='height' type='text' onChange={handleh} />
        <h6 >{errorheight}</h6>
        <h3>Weight</h3>
        <input id='weight' type='text' onChange={handlew} />
        <h6 >{errorweight}</h6>
        <div className='btn'>
          <button onClick={calcute}>Calcute</button>
        </div>
        <h1 id='result'></h1>
        
      </span>

    </div>
  );
}

export default App;
