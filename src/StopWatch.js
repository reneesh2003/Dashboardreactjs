import React, { useState, useRef } from 'react';
import './css/StopWatch.css'
import { useNavigate } from 'react-router-dom';

function StopWatch() {
  const navigate=useNavigate()
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const intervalRef = useRef(null);

  const startTimer = () => {
    setIsActive(true);
    intervalRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };

  const pauseTimer = () => {
    clearInterval(intervalRef.current);
    setIsActive(false);
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setIsActive(false);
    setTimer(0);
  };

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return (
      String(hours).padStart(2, '0') +
      ':' +
      String(minutes).padStart(2, '0') +
      ':' +
      String(seconds).padStart(2, '0')
    );
  };

  const handleHome =()=>{
    navigate('/')
  }
  return (
    <div className="container">
      <button className="home-button" onClick={handleHome}>Home</button>
      <h1>STOPWATCH</h1>
    <div className="stopwatch">
      <h1 className="display">{formatTime(timer)}</h1>
      <div className="controls">
        {!isActive ? (
          <button className='btn start' onClick={startTimer}>Start</button>
        ) : (
          <button className='btn pause' onClick={pauseTimer}>Pause</button>
        )}
        <button className='btn reset' onClick={resetTimer}>Reset</button>
      </div>
    </div>
    </div>
  );
}

export default StopWatch;
