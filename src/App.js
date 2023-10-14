import './App.css';
import React from 'react';
import img from './h.jpg';
import {useState , useEffect} from "react";
function App() {
  const [height,setHeight]=useState(0);
  const [weight,setWeight]=useState(0);
  const [errorweight,setErrorWeight]=useState("");
  const [errorheight,setErrorHeight]=useState("");
  const [hheight,setHheight]=useState(0);
  const [calcuute,setCalcuute]=useState(0);
  const[bmi,setBmi]=useState("");
  const [color,setColor]=useState("#5B8FB9");

  const handleh=(event)=>{
    
    setHeight(event.target.value) ;
   
  }
  const handlew=(event)=>{
    
    setWeight(event.target.value) ;
  }
  const calcute=()=>{
    height>99 ? setHheight((height*height)/10000):(setErrorHeight("Your number is cm") || setColor("red"));
    weight>20 ? setCalcuute((weight/hheight).toFixed(2)):(setErrorWeight("Your number is kg") || setColor("red"));
    let test=calcuute;
    test=weight/((height*height)/10000);
    result(test);
    setCalcuute(test);

  }
  const result =(calcuute)=>{
    setColor("#5B8FB9");
    setErrorHeight("");
    setErrorWeight("");
    if(calcuute <18.5){
      setBmi("Underweight");
    }
    if(calcuute >=18.5 && calcuute <25){
      setBmi("Normal range");
    }
    if(calcuute >=25 && calcuute <30){
      setBmi("Overweight");
    }
    if(calcuute >=30 && calcuute <35){
      setBmi("Obese class I");
    }
    if(calcuute >=35 && calcuute <40){
      setBmi("Obese class II");
    }
    if(calcuute >=40){
      setBmi("Obese class III");
    }
  }
  return (
    <div className='app'>
      <span>
        <img src={img} alt="React Image"  />
      </span>
      <span className='text'>
        <h1>BMI</h1>
        <h3>Height</h3>
        <input id='height' style={{border:`${color} 2px solid`}} type='text' onChange={handleh} />
        <h6 >{errorheight}</h6>
        <h3>Weight</h3>
        <input id='weight' type='text' style={{border:`${color} 2px solid`}} onChange={handlew} />
        <h6 >{errorweight}</h6>
        <div className='btn'>
          <button onClick={calcute}>Calcute</button>
        </div>
        <h3 id='result'  style={{ opacity: calcuute == Infinity || calcuute ==0 ? 0 : 1}} >{calcuute}</h3>
        <h3 id='bmi' style={{ opacity: calcuute == Infinity || calcuute ==0 ? 0 : 1}}>{bmi}</h3>
        
      </span>

    </div>
  );
}

export default App;
