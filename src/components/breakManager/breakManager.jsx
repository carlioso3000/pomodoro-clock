import { useSelector, useDispatch } from 'react-redux';
import { incrementBreakTime, decrementBreakTime } from '../../redux/actions/actions';
import Button from '../button/button';

const BreakTime = () => {
  const breakTime = useSelector(state => state.breakTime.breakTime);
  const dispatch = useDispatch();

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    return `${minutes} min`;
  };

  return(
    <div>
      <h2 id={'break-label'}>Break Length</h2>
      <div className='display' id='break-length'>{formatTime(breakTime)}</div>
      <Button
        id={'break-decrement'} 
        text='Decrement'
        isBreakTimeButton={true}
        isIncrementButton={false}
      />
      <Button 
        id={'break-increment'} 
        text='Increment'
        isBreakTimeButton={true}
        isIncrementButton={true}
      />
    </div>
  )
}

export default BreakTime;