import { combineReducers } from 'redux';
import { fetchProductsByCategoryReducer } from './FetchProductsByCategoryReducer.reducer';
import { fetchLoginReducer} from "./FetchLoginReducer.reducer";
import {fetchArrayReducer} from "./FetchArrayReducer.reducer";
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
    fetchProductsByCategoryReducer: fetchProductsByCategoryReducer,
    fetchLoginReducer: fetchLoginReducer,
    fetchArrayReducer: fetchArrayReducer,
    form: formReducer,
});
