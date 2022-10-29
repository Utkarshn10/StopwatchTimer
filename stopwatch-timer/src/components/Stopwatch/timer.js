import React, { useContext } from 'react';
import { formatTime } from '../utils';

const Timer = () => {
  return (
    <div className="app">
      <div>
        <h1 mt='2'>{formatTime(timer)}</h1>
      </div>
    </div>
  );
}

export default Timer;