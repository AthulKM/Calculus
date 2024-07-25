import React, { useContext } from 'react'
import { MyContext } from '../App';

const Division = () => {
    const { firstNumber, secondNumber, setFirstNumber, setSecondNumber, result, setResult, firstNumberChange, secondNumberChange } = useContext(MyContext);

    const divisionFirstBySecond = (e) => {
        e.preventDefault();
        setResult(firstNumber / secondNumber);
    }
    const divisionSecondByFirst = (e) => {
        e.preventDefault();
        setResult(secondNumber / firstNumber);
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
              <button onClick={divisionFirstBySecond}>Divide first number by second number</button>
              <br />
              <button onClick={divisionSecondByFirst}>Divide second number by first number</button>
              <br/>
               
              <div>
                  <h5>Result : {result}</h5>
              </div>
                  
                  
      </form>
    </div>
  )
}

export default Division
