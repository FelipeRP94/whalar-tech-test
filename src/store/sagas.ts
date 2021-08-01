import { all, fork } from "redux-saga/effects";
import {
  watchGetCharactersListSaga,
  watchGetCharacterSaga,
  watchGetFilmsCharacterSaga,
} from "./sagas/characters";

export default function* rootSaga() {
  yield all([
    fork(watchGetCharactersListSaga),
    fork(watchGetCharacterSaga),
    fork(watchGetFilmsCharacterSaga),
  ]);
}
