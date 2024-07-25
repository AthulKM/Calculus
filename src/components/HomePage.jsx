import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../App.css';




const HomePage = () => {
    const navigate = useNavigate();
    const clickHandlerAddition = () => { 
        navigate('/addition');
    }
    const clickHandlerSubtraction = () => { 
        navigate('/subtraction');
    }
    const clickHandlerMultiplication = () => { 
        navigate('/multiplication');
    }
    const clickHandlerDivision = () => { 
        navigate('/division');
    }

  return (
    <div className='container'>
          <button onClick={clickHandlerAddition}>
              Addition
          </button>
          <br />
          <button onClick={clickHandlerSubtraction}>
              Subtraction
          </button>
          <br />
          <button onClick={clickHandlerMultiplication}>
              Multiplication
          </button>
          <br />
          <button onClick={clickHandlerDivision}>
              Division
            </button>
    </div>
  )
}

export default HomePage
