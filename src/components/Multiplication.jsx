import React, { useContext } from 'react'
import { MyContext } from '../App';


const Multiplication = () => {
    const { firstNumber, secondNumber, setFirstNumber, setSecondNumber, result, setResult, firstNumberChange, secondNumberChange } = useContext(MyContext);

    const multiplication = (e) => { 
        e.preventDefault();
        setResult(firstNumber * secondNumber);
    }
  return (
    <div>
      <form>
              First Number : 
              <input type="number"
                  placeholder='firstNumber'
                  name='firstNumber'
                  value={firstNumber}
                  onChange={firstNumberChange} />
              <br/>
              Second Number :
              <input type="number"
                  placeholder='secondNumber'
                  name='secondNumber'
                  value={secondNumber}
                  onChange={secondNumberChange} />
              <br/>
              <button onClick={multiplication}>Multiply them</button>
              <br/>
               
              <div>
                  <h5>Result : {result}</h5>
              </div>
                  
                  
      </form>
    </div>
  )
}

export default Multiplication
