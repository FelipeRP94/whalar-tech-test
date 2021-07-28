import { applyMiddleware, createStore } from "redux";
import { combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";

const sagaMiddlewae = createSagaMiddleware();

const rootReducer = combineReducers({});

const store = createStore(rootReducer, applyMiddleware(sagaMiddlewae));

sagaMiddlewae.run(rootSaga);

export default store;
