const initialState = {
  breakTime: 5 * 60
};

const breakManagerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT_BREAK_TIME':
      if (state.breakTime < 60 * 60) {
        return {
          ...state,
          breakTime: state.breakTime + 60
        };
      } else {
        return state;
      }
    case 'DECREMENT_BREAK_TIME':
      if (state.breakTime > 60) {
        return {
          ...state,
          breakTime: state.breakTime - 60
        };
      } else {
        return state;
      }
    case 'RESET_BREAK_TIME':
      return initialState;
    default: 
      return state;
  };
}

export default breakManagerReducer;
