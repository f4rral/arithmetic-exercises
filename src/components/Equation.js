import React from 'react';
import Operation from './Operation';

function Equation(props) {
  return (
    <div className='equation'>
      <span className='equation__block'>
        {props.first}
      </span>
      <span className='equation__block'>
        <Operation type={props.operation} />
      </span>
      <span className='equation__block'>
        {props.second}
      </span>
      <span className='equation__block'>
        <Operation type='='/>
      </span>
      {
        props.isShowAnswer ? (
          <span className='equation__block equation__block--answer equation__block--right'>{props.answer}</span>
        ) : (
          <span className='equation__block equation__block--answer'>?</span>
        )
      }
    </div>
  );
}

export default Equation;
