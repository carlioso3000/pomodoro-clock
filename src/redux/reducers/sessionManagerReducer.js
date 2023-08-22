const initialState = {
  sessionTime: 25 * 60
};

const sessionManagerReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'INCREMENT_SESSION_TIME':
      if(state.sessionTime < 60 * 60) {
        return {
          ...state,
          sessionTime: state.sessionTime + 60
        };
      } else {
        return state;
      }
    case 'DECREMENT_SESSION_TIME':
      if(state.sessionTime > 60) {
        return {
          ...state,
          sessionTime: state.sessionTime - 60
        };
      } else {
        return state;
      }
      case 'RESET_SESSION_TIME':
        return initialState;
    default:
      return state
  };
}

export default sessionManagerReducer;