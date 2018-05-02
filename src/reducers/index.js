import { combineReducers } from 'redux';
import { routerReducer} from 'preact-router-redux';
import { testReducer } from './test.reducer';
import { fetchProductsReducer } from './fetchProducts.reducer';

export default combineReducers({
	routing: routerReducer,
	testReducer: testReducer,
	fetchProductsReducer: fetchProductsReducer
});
