import { applyMiddleware, createStore } from "redux";
import { charactersReducer } from "./reducers/characters.reducer";
import { combineReducers } from "redux";
import { ReduxState } from "./reduxState";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import { composeWithDevTools } from "redux-devtools-extension";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers<ReduxState>({
  charactersState: charactersReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
