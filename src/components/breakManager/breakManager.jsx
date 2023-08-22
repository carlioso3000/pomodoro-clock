import { useSelector, useDispatch } from 'react-redux';
import { incrementBreakTime, decrementBreakTime } from '../../redux/actions/actions';
import Button from '../button/button';
import '../../styles/displayManagers.css';

const BreakTime = () => {
  const breakTime = useSelector(state => state.breakTime.breakTime);
  const dispatch = useDispatch();

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    return `${minutes} min`;
  };

  return(
    <div className='display-manager-container break-container'>
      <h2 id={'break-label'}>Break Length</h2>
      <div className='display-break' id='break-length'>{formatTime(breakTime)}</div>
      <div className='display-manager-button-container'>
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
    </div>
  )
}

export default BreakTime;