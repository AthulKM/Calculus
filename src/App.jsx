import React, { Children, createContext, useState } from 'react'

import { Route, Routes, useNavigate } from 'react-router-dom'
import HomePage from './components/HomePage'
import Addition from './components/Addition'
import Subtraction from './components/Subtraction'
import Multiplication from './components/Multiplication'
import Division from './components/Division'
import './App.css';

export const MyContext = createContext();
const App = () => {
  
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [result, setResult] = useState(null);
  const navigate = useNavigate();

  const firstNumberChange = (e) => { 
    setFirstNumber(Number(e.target.value));
    
}
const secondNumberChange = (e) => { 
    setSecondNumber(Number(e.target.value));
}

  
  const contextValues = { firstNumber, setFirstNumber, secondNumber, setSecondNumber, result, setResult, firstNumberChange, secondNumberChange };

  const navigateToHome = () => {
    navigate('/')
  }
  
  return (
    <div>
      <div className='header'>
        <button onClick={navigateToHome}>Home</button>
      </div>
      

      <MyContext.Provider value={contextValues}>
        
        
      <Routes>
         
          <Route path='/' element={ <HomePage/>}/>
        <Route path='/addition' element={<Addition />} />
        <Route path='/subtraction' element={<Subtraction />} />
        <Route path='/multiplication' element={<Multiplication />} />
        <Route path='/division' element={ <Division/>}/>
        </Routes>
        
      </MyContext.Provider>

    </div>
  )
}


export default App
