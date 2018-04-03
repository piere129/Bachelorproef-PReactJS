import { combineReducers } from 'redux'
import { routerReducer } from 'preact-router-redux'
import {testReducer} from './test.reducer'

export default combineReducers({
  routing: routerReducer,
  testReducer: testReducer
})