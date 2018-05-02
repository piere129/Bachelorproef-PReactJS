import { combineReducers } from 'redux';
import { fetchAllReducer } from './FetchAllReducer.reducer'
import { fetchEmailReducer } from './FetchEmailReducer.reducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
	fetchAllReducer,
	fetchEmailReducer,
	form: formReducer
});
