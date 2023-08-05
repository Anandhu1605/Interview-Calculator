import React, { useState } from 'react';
import './App.css';

function App() {
  const [value,setValue]=useState('')

  const handleClick=(e)=>{
    const expression = document.querySelector('input').value.replace('÷', '/');
    setValue(value.concat(e.target?.value));
    console.log(expression)
 }

  const calc=()=>{
    try {
      const expression = value.replace(/÷/g, '/').replace(/x/g, '*');
      setValue(eval(expression).toString());
    } catch (error) {
      setValue("INVALID")
   }
  
  }
  return (
   <div className='container'>
    <div className='calculator'>
      <form action=''>
        <div className='display'>
          <input type='text' value={value}/>
        </div>
        
        <div>
          
          <input type='button' value="7"  onClick={handleClick}/>
          <input type='button' value="8" onClick={handleClick}/>
          <input type='button' value="9" onClick={handleClick}/>
          <input type='button' value="÷" onClick={handleClick}/>
        </div>
        <div>
        <input type='button' value="4" onClick={handleClick}/>
        <input type='button' value="5" onClick={handleClick}/>
        <input type='button' value="6" onClick={handleClick}/>
        <input type='button' value="x" onClick={handleClick}/>
        </div>
        <div>
        <input type='button' value="1" onClick={handleClick}/>
        <input type='button' value="2" onClick={handleClick}/>
        <input type='button' value="3" onClick={handleClick}/>
        <input type='button' value="-" onClick={handleClick}/>
        </div>

        <div>
        <input type='button' value="0" onClick={handleClick}/>
        <input type='button' value="." onClick={handleClick} style={{fontWeight:"bolder",justifyContent:"space-between"}} />
        <input type='button' value="+" onClick={handleClick}/>
        <input type='button' value="=" onClick={calc} style={{backgroundColor:"orange", color:"white"}}/>
        </div>



  
      </form>
    </div>
   </div>
  );
}


export default App;






