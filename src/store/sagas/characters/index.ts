import { takeEvery } from "redux-saga/effects";
import { charactersActionTypes } from "../../actions/characters.actions";
import { getCharactersSagas } from "./characters.sagas";

export function* watchGetCharactersSaga() {
  yield takeEvery(
    charactersActionTypes.GET_CHARACTERS_REQUEST,
    getCharactersSagas
  );
}
