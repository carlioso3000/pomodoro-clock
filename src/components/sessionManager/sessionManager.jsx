import {useSelector, useDispatch} from 'react-redux';
import { incrementSessionTime, decrementSessionTime } from '../../redux/actions/actions';
import Button from '../button/button';

const SessionTime = () => {
  const sessionTime = useSelector(state => state.sessionTime.sessionTime);
  const dispatch = useDispatch();

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    return `${minutes} min`;
  };

  return (
    <div>
      <h2 id='session-label'>Session Length</h2>
      <div id='session-length'>{formatTime(sessionTime)}</div>
      <Button
        id='session-decrement'
        text='Decrement'
        isSessionTimeButton={true}
        isIncrementButton={false}
      />
      <Button
        id='session-increment'
        text='Increment'
        isSessionTimeButton={true}
        isIncrementButton={true}
      />
    </div>
  )
}

export default SessionTime;