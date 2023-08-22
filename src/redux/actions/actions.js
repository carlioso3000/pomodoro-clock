export const incrementBreakTime = () => ({
  type: 'INCREMENT_BREAK_TIME'
});

export const decrementBreakTime = () => ({
  type: 'DECREMENT_BREAK_TIME'
});

export const incrementSessionTime = () => ({
  type: 'INCREMENT_SESSION_TIME'
});

export const decrementSessionTime = () => ({
  type: 'DECREMENT_SESSION_TIME'
});

export const playTimer = () => ({
  type: 'PLAY_TIMER'
});

export const pauseTimer = () => ({
  type: 'PAUSE_TIMER'
});

export const restartTimer = () => ({
  type: 'RESTART_TIMER'
});

export const resetSessionTimer = () => ({
  type: 'RESET_SESSION_TIME'
})

export const resetBreakTimer = () => ({
  type: 'RESET_BREAK_TIME'
})

export const setTimer = (time) => ({
  type: 'SET_TIMER',
  value: time
});