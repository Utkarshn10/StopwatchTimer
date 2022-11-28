import { useState, useRef } from 'react';
const useTimer = (initialState = 0) => {
  const [timer, setTimer] = useState(0);
  const [timerActive, setTimerActive] = useState(false);
  const [timerPaused, setTimerPaused] = useState(false);
  const countRef = useRef(null);
  
  const handleStart = () => {
    setTimerActive(true);
    setTimerPaused(true);
    countRef.current = setInterval(() => {
      setTimer(timer => timer + 1);
    }, 1000);
  };
  const handlePause = () => {
    clearInterval(countRef.current);
    setTimerPaused(false);
  };
  const handleResume = () => {
    setTimerPaused(true);
    countRef.current = setInterval(() => {
      setTimer(timer => timer + 1);
    }, 1000);
  };
  const handleReset = () => {
    clearInterval(countRef.current);
    setTimerActive(false);
    setTimerPaused(false);
    setTimer(0);
  };
  return {
    timer,
    timerActive,
    timerPaused,
    handleStart,
    handlePause,
    handleResume,
    handleReset
  };
};
export default useTimer;