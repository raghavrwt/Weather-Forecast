import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers/listing';
import data from '../pages/data.json'

let store = null;

export default (state = {}) => {
	store = createStore(reducers, state, applyMiddleware(thunk));
	return store;
};

export function getStore() {
	return store;
}
