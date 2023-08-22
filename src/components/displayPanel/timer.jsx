import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { playTimer, pauseTimer, restartTimer, setTimer, resetSessionTimer, resetBreakTimer, toggleBreakTime } from '../../redux/actions/actions';
import Button from '../button/button.jsx';
import alarmSound from '../../assets/alarm/alarm.wav';
import { LuAlarmClock, LuAlarmClockOff } from "react-icons/lu";
import '../../styles/timer.css'


const Timer = () => {
  const timeLeft = useSelector(state => state.time.timeLeft);
  const isRunning = useSelector(state => state.time.isRunning);
  const isBreakTime = useSelector(state => state.time.isBreakTime); // Obtén el valor de isBreakTime desde el store
  const isBreak = useSelector(state => state.breakTime.isBreak);
  const sessionTime = useSelector(state => state.sessionTime.sessionTime);
  const breakTime = useSelector(state => state.breakTime.breakTime);
  const dispatch = useDispatch();
  const [isSoundOn, setIsSoundOn] = useState(true);

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      const interval = setInterval(() => {
        dispatch({ type: 'DECREMENT_TIME_LEFT'});
      }, 1000);
      return () => clearInterval(interval);
    } else if (isRunning && timeLeft === 0) {
      dispatch(setTimer(isBreak ? sessionTime : breakTime));
      //dispatch({ type: 'TOGGLE_BREAK' });
      dispatch({ type: 'TOGGLE_BREAK_TIME' }); // Despacha la acción TOGGLE_BREAK_TIME cuando cambie el modo
    }
  }, [isRunning, timeLeft, isBreak, sessionTime, breakTime, dispatch]);

  useEffect(() => {
    if (timeLeft === 0 && isSoundOn) {
      const beep = document.getElementById('beep');
      beep.play();
      beep.volume = 0.2;
    }
  }, [timeLeft, isSoundOn]);
  

  const handlePlay = () => dispatch(playTimer());
  const handlePause = () => dispatch(pauseTimer());
  const handleReset = () => {
    dispatch(setTimer(sessionTime));
    dispatch(restartTimer());
    dispatch(resetSessionTimer());
    dispatch(resetBreakTimer());
  };
  

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  };
  // Usa una expresión ternaria para mostrar diferentes textos
  const label = !isRunning ? 'Timer' : isBreakTime ? 'Break has begun' : 'Session has begun';
  return (
    
    <div className='timer'>
      <button className='sound-button' onClick={() => setIsSoundOn(!isSoundOn)}>
        {isSoundOn ? <LuAlarmClock className='sound-icon' /> : <LuAlarmClockOff className='sound-icon' />}
      </button>
      <div className='timer-title'>
        <h2 id='timer-label'>{label}</h2>
        </div>
      <div className='button-container'>
        <Button
          className={'button-50'}
          id={'start_stop'}
          text={isRunning ? 'Pause' : 'Play'}
          isPlayRestartButton={true}
          isPlayPauseButton={true}
          isPlayButton={!isRunning}
        />
        <Button
          className={'button-50'}
          id={'reset'}
          text='Reset'
          isResetButton={true}
        />
      </div>
      <div className="display" id='time-left'>
        {formatTime(timeLeft)}
      </div>
      
      <audio id='beep' src={alarmSound}/>
    </div>
  );
};

export default Timer;