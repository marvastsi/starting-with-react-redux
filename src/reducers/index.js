import { combineReducers } from 'redux';
import CounterReducer from './CounterReducer';
import SimpleCounterReducer from './SimpleCounterReducer';

export default combineReducers({
	counter: CounterReducer,
	simpleCounter: SimpleCounterReducer,
})