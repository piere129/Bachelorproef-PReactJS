const initialState = { username: "" };

export function fetchLoginReducer(state = initialState, action) {
    switch (action.type) {
        case 'fetchUsername':
            return { ...state, username: action.res };
        default:
            return state;
    }
}