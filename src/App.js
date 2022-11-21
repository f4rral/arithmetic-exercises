import React, { useRef, useState } from 'react';
import * as apiEquation from 'api/Equation';

import Equation from './components/Equation';
import Answer from './components/Answer';


function App() {
  const inputAnswer = useRef();
  let [stateApp, setStateApp] = useState(
    {
      equation: apiEquation.getEquation(),
      isShowAnswer: false,
      status: '',
      userAnswer: null
    }
  );

  // Ввод значений
  function onInputAnswer(e) {
    setStateApp({
      ...stateApp,
      userAnswer: e.target.value || ''
    });
  }

  // Отправка формы
  function onSubmit(e) {
    e.preventDefault();

    if (stateApp.userAnswer) {
      setAnswer(Number(stateApp.userAnswer));
    }
  }

  // Проверка ответа
  function setAnswer(answer) {
    console.log('setAnswer', answer);

    if (answer === stateApp.equation.answer) {
      console.log(true);

      setStateApp({
        ...stateApp,
        isShowAnswer: true,
        status: 'right'
      });

      setTimeout(newEquation, 1000);
    } else {
      console.log(false);

      setStateApp({
        ...stateApp,
        status: 'error',
      });

      setTimeout(() => {
        setStateApp({
          ...stateApp,
          status: '',
        });
      }, 300);
    }

    inputAnswer.current.focus();
  }

  function newEquation() {
    setStateApp({
      ...stateApp,
      equation: apiEquation.getEquation(),
      isShowAnswer: false,
      status: '',
      userAnswer: ''
    });
  }

  return (
      <main className='main'>
      <div className='main__content'>
        <h1 className='main__app_title'>Решите:</h1>
        <div className='main__equation'>
          <Equation
            first = {stateApp.equation.first}
            second = {stateApp.equation.second}
            operation = {stateApp.equation.operation}
            answer = {stateApp.equation.answer}
            isShowAnswer={stateApp.isShowAnswer}
          />
        </div>

        <div className='main__answer global__mt--24'>
          <Answer
            status={stateApp.status}
            userAnswer={stateApp.userAnswer}
            onChange={onInputAnswer}
            onSubmit={onSubmit}
            inputAnswer={inputAnswer}
          />
        </div>
      </div>
    </main>
  );
}

export default App;
