import { all, fork } from "redux-saga/effects";
import { watchGetCharactersSaga } from "./sagas/characters";

export default function* rootSaga() {
  yield all([fork(watchGetCharactersSaga)]);
}
