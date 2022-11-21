import React from 'react';

function Answer(props) {
  let classInput = 'answer__input';

  if (props.status === 'error') {
    classInput += ' answer__input--error';
  }

  if (props.status === 'right') {
    classInput += ' answer__input--right';
  }

  return (
    <div className='answer'>
      <form className='answer__form' onSubmit={props.onSubmit} >
        <input
          className={classInput}
          name='answer'
          type='number'
          size='1'
          min="-99999"
          max="99999"
          autoComplete='off'
          required={true}
          onChange={props.onChange}
          value={props.userAnswer || ''}
          ref={props.inputAnswer}
        />

        <button
          className='answer__submit'
          type='submit'
        >
          Проверить
        </button>
      </form>
    </div>
  );
}

export default Answer;
