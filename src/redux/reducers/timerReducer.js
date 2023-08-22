const initialState = {
  isRunning: false,
  timeLeft: 25 * 60,
  isBreakTime: false
};

const timerReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'PLAY_TIMER':
      return {
        ...state,
        isRunning: true
    };
    case 'PAUSE_TIMER':
      return {
        ...state,
        isRunning: false
    };
    case 'RESTART_TIMER':
      return {
        ...state,
        isRunning: false,
        timeLeft: 25 * 60
    };
    case 'DECREMENT_TIME_LEFT':
      return {
        ...state,
        timeLeft: state.timeLeft - 1
      };
    case 'SET_TIMER':
      return {
        ...state,
        timeLeft: action.value
      };
    case 'TOGGLE_BREAK_TIME':
      return {
        ...state,
        isBreakTime: !state.isBreakTime
      };
    default:
      return state;
  }
}

export default timerReducer;