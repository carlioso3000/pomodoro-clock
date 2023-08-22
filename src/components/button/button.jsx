import { useDispatch } from 'react-redux';
import {
  incrementBreakTime,
  decrementBreakTime,
  incrementSessionTime,
  decrementSessionTime,
  playTimer,
  pauseTimer,
  restartTimer,
  resetBreakTimer,
  resetSessionTimer
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
  const dispatch = useDispatch();
  const handleClick = () => {
    if (isBreakTimeButton) {
      if(isIncrementButton) {
        dispatch(incrementBreakTime());
      } else {
        dispatch(decrementBreakTime());
      }
    } else if (isSessionTimeButton) {
        if(isIncrementButton) {
          dispatch(incrementSessionTime());
        } else {
          dispatch(decrementSessionTime());
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