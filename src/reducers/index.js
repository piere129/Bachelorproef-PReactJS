import { combineReducers } from 'redux';
import { fetchProductsByCategoryReducer } from './FetchProductsByCategoryReducer.reducer';
import { fetchLoginReducer} from "./FetchLoginReducer.reducer";
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
    fetchProductsByCategoryReducer: fetchProductsByCategoryReducer,
    fetchLoginReducer: fetchLoginReducer,
    form: formReducer,
});
