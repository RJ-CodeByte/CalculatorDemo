import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import calcReducer from './reducers';

const rootReducer = combineReducers({ calcReducer })

export const Store = createStore(rootReducer, applyMiddleware(thunk));
Store.subscribe(() => { console.log(Store.getState()) })
