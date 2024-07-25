import React, { useContext } from 'react'
import { MyContext } from '../App';


const Subtraction = () => {
    const { firstNumber, secondNumber, setFirstNumber, setSecondNumber, result, setResult, firstNumberChange, secondNumberChange } = useContext(MyContext);

    const subtract2from1 = (e) => { 
        e.preventDefault();
        setResult(firstNumber - secondNumber);
    }
    const subtract1from2 = (e) => { 
        e.preventDefault();
        setResult(secondNumber - firstNumber);
    }


  return (
    <div>
          <form>
              First number : 
              <input type="number"
                  name="firstNumber"
                  value={firstNumber}
                  onChange={firstNumberChange}
              />
              Second number :
              <input type='number'
                  name='secondNumber'
                  value={secondNumber}
                  onChange={secondNumberChange}
              />
              <button onClick={subtract2from1}>Subtract second number from first number</button>
              <button onClick={subtract1from2}>Subtract first number from second number</button>

              <div>
                  <h5>
                      Result : { result}
                  </h5>
              </div>
      </form>
    </div>
  )
}

export default Subtraction
