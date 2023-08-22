import { combineReducers } from 'redux';
import breakManagerReducer from './breakManagerReducer';
import sessionManagerReducer from './sessionManagerReducer';
import timerReducer from './timerReducer';


const rootReducer = combineReducers({
  breakTime: breakManagerReducer,
  sessionTime: sessionManagerReducer,
  time: timerReducer
});

export default rootReducer;