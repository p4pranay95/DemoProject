
import { combineReducers } from 'redux';
import homeReducer from './homeReducer';
import commonReducer from './commonReducer';

export default combineReducers({
	homeReducer,
	commonReducer,
});