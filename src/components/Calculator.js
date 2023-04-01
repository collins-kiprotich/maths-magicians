import React, { useState } from 'react';
import calculate from '../logic/calculate';

function Calculator() {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const clickHandle = (e) => {
    const clickedBtn = e.target.innerText;
    const Result = calculate(state, clickedBtn);
    setState(Result);
  };

  const { total, operation, next } = state;

  return (
    <div className="MainBody">
      <div className="result">
        {total}
        {operation}
        {next}
      </div>
      <div className="num-symb">
        <button className="buttons" type="button" onClick={clickHandle}>AC</button>
        <button className="buttons" type="button" onClick={clickHandle}>+/-</button>
        <button className="buttons" type="button" onClick={clickHandle}>%</button>
        <button className="buttons operator" type="button" onClick={clickHandle}>÷</button>
      </div>
      <div className="num-symb">
        <button className="buttons" type="button" onClick={clickHandle}>7</button>
        <button className="buttons" type="button" onClick={clickHandle}>8</button>
        <button className="buttons" type="button" onClick={clickHandle}>9</button>
        <button className="buttons operator" type="button" onClick={clickHandle}>x</button>
      </div>
      <div className="num-symb">
        <button className="buttons" type="button" onClick={clickHandle}>4</button>
        <button className="buttons" type="button" onClick={clickHandle}>5</button>
        <button className="buttons" type="button" onClick={clickHandle}>6</button>
        <button className="buttons operator" type="button" onClick={clickHandle}>-</button>
      </div>
      <div className="num-symb">
        <button className="buttons" type="button" onClick={clickHandle}>1</button>
        <button className="buttons" type="button" onClick={clickHandle}>2</button>
        <button className="buttons" type="button" onClick={clickHandle}>3</button>
        <button className="buttons operator" type="button" onClick={clickHandle}>+</button>
      </div>
      <div className="num-symb">
        <button className="buttons" id="bigbtn" type="button" onClick={clickHandle}>0</button>
        <button className="buttons" type="button" onClick={clickHandle}>.</button>
        <button className="buttons operator" type="button" onClick={clickHandle}>=</button>
      </div>
    </div>
  );
}

export default Calculator;
