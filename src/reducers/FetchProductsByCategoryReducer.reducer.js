const initialState = { items: [] };

export function fetchProductsByCategoryReducer(state = initialState, action) {
    switch (action.type) {
        case 'fetchProductsByCategory':
            return { ...state, items: action.res };
        default:
            return state;
    }
}