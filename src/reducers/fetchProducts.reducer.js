const initialState = {products: []};

export function fetchProductsReducer(state = initialState, action) {
	switch (action.type) {
		case 'fetchAllProducts':
			return {...state, products: action.res};
		default:
			return state;
	}
}
