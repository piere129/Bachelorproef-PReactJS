const initialState = { email: '' };

export function fetchEmailReducer(state = initialState, action) {
	switch (action.type) {
		case 'fetchEmail':
			return { ...state, email: action.res };
		default:
			return state;
	}
}
