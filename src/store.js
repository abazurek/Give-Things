import {createStore, applyMiddleware} from "redux";
import createSagaMiddleware from 'redux-saga'
import thunk from "redux-thunk";
import reducer from './reducers'
import {logger} from "redux-logger";
import {composeWithDevTools} from "redux-devtools-extension";

// const sagaMiddleware = typeof createSagaMiddleware === 'function' ? createSagaMiddleware() : createSagaMiddleware.default()
// const composeEnhancers = composeWithDevTools({trace: true, traceLimit: 25})


const middleWare = [thunk, logger];

const store=createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleWare))
);

export default store