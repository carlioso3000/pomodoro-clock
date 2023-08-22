import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { playTimer, pauseTimer, restartTimer, setTimer, resetSessionTimer, resetBreakTimer } from '../../redux/actions/actions';
import Button from '../button/button.jsx';

const Timer = () => {
  const timeLeft = useSelector(state => state.time.timeLeft);
  const isRunning = useSelector(state => state.time.isRunning);
  const isBreak = useSelector(state => state.breakTime.isBreak);
  const sessionTime = useSelector(state => state.sessionTime.sessionTime);
  const breakTime = useSelector(state => state.breakTime.breakTime);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      const interval = setInterval(() => {
        dispatch({ type: 'DECREMENT_TIME_LEFT'});
      }, 1000);
      return () => clearInterval(interval);
    } else if (isRunning && timeLeft === 0) {
      dispatch(setTimer(isBreak ? sessionTime : breakTime));
      dispatch({ type: 'TOGGLE_BREAK' });
    }
  }, [isRunning, timeLeft, isBreak, sessionTime, breakTime, dispatch]);

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

  return (
    <div>
      <h2 id='timer-label'>Timer</h2>
      <div className="display" id='time-left'>{formatTime(timeLeft)}</div>
      <Button
        id={'start_stop'}
        text={isRunning ? 'Pause' : 'Play'}
        isPlayRestartButton={true}
        isPlayPauseButton={true}
        isPlayButton={!isRunning}
      />
      <Button 
        id={'reset'}
        text='Reset'
        isResetButton={true}
      />
    </div>
  );
};

export default Timer;