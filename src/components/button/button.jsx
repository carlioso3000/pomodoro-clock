import { useDispatch, useSelector } from 'react-redux';
import {
  incrementBreakTime,
  decrementBreakTime,
  incrementSessionTime,
  decrementSessionTime,
  playTimer,
  pauseTimer,
  restartTimer,
  resetBreakTimer,
  resetSessionTimer,
  setTimer
} from '../../redux/actions/actions';

function Button({
  text,
  id,
  isBreakTimeButton, 
  isSessionTimeButton, 
  isPlayRestartButton, 
  isIncrementButton,
  isPlayPauseButton, 
  isPlayButton,
  isResetButton}) 
  {
    const sessionTime = useSelector(state => state.sessionTime.sessionTime);
  const dispatch = useDispatch();
  const handleClick = () => {
    if (isBreakTimeButton) {
      if(isIncrementButton) {
        dispatch(incrementBreakTime());
      } else {
        dispatch(decrementBreakTime());;
      }
    } else if (isSessionTimeButton) {
        if(isIncrementButton) {
          dispatch(incrementSessionTime());
          dispatch(setTimer(sessionTime + 60));
        } else {
          dispatch(decrementSessionTime());
          dispatch(setTimer(sessionTime - 60));
        }
    } else if ( isPlayRestartButton){
      if(isPlayPauseButton) {
        if(isPlayButton) {
          dispatch(playTimer())
        } else {
          dispatch(pauseTimer())
        }
      } else {
        dispatch(restartTimer())
      }
    } else if (isResetButton) {
      dispatch(restartTimer());
      dispatch(resetBreakTimer());
      dispatch(resetSessionTimer());
    }
  }

  return(
    <button onClick={handleClick} id={id}>{text}</button>
  )
}

export default Button;