import React from 'react';
import useTimer from '../hook/useTimer';
import { formatTime } from '../utils';


const Timer = () => {
  const { timer, isActive, isPaused, handleStart, handlePause, handleResume, handleReset } = useTimer(0)

  return (
    <div className="app">
      <div className='stopwatch-card'>
        <p>{formatTime(timer)}</p>
        <div className='buttons'>
          {
            !isActive && !isPaused ?
              <button className="button-start" onClick={handleStart}>Start</button>
              : (
                isPaused ? <button onClick={handlePause}>Stop</button> :
                  <button onClick={handleResume}>Resume</button>
              )
          }
          <button onClick={handleReset} disabled={!isActive}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default Timer;