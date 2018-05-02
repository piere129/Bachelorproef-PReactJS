const initialState = { items: [] };

export function fetchAllReducer(state = initialState, action) {
	switch (action.type) {
		case 'fetchAllProducts':
			return { ...state, items: action.res };
		default:
			return state;
	}
}
