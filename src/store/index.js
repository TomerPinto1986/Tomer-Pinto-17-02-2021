import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { weatherReducer } from './reducers/weatherReducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({weatherReducer});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));