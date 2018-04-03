export function testReducer(state = { count: 0 }, action) {
    const count = state.count;
    switch (action.type) {
      case 'increase':
        return { ...state, count: count + 1 };
      default:
        return state;
    }
  }
  