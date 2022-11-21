import React from 'react';

import { ReactComponent as Equal } from './icons/equal.svg';
import { ReactComponent as Divide } from './icons/divide.svg';
import { ReactComponent as Minus } from './icons/minus.svg';
import { ReactComponent as Multiply } from './icons/multiply.svg';
import { ReactComponent as Plus } from './icons/plus.svg';

function Operation(props) {
  switch (props.type) {
    case '+':
      return <Plus/>
    case '-':
      return <Minus/>

    case '*':
      return <Multiply/>

    case '/':
      return <Divide/>

    case '=':
      return <Equal/>

    default:
      return <span>{props.type}</span>
  }
}

export default Operation;
