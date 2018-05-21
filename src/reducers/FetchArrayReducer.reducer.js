const initialState = { array: [] };

export function fetchArrayReducer(state = initialState, action) {
    switch (action.type) {
        case 'addItem':
            return { ...state, array: [...state.array, "test"] };
        case 'removeItem':
            return { ...state, array: [...state.array.slice(0, state.array.length - 1)] };
        default:
            return state;
    }
}