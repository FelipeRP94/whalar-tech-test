import { takeEvery } from "redux-saga/effects";
import { characterActionTypes } from "../../actions/characters.actions";
import { charactersListActionTypes } from "../../actions/charactersList.actions";
import { filmActionTypes } from "../../actions/film.actions";
import {
  getCharactersListSaga,
  getCharacterSaga,
  getFilmsCharacterSaga,
} from "./characters.sagas";

export function* watchGetCharactersListSaga() {
  yield takeEvery(
    charactersListActionTypes.GET_CHARACTERS_LIST_REQUEST,
    getCharactersListSaga
  );
}

export function* watchGetCharacterSaga() {
  yield takeEvery(characterActionTypes.GET_CHARACTER_REQUEST, getCharacterSaga);
}

export function* watchGetFilmsCharacterSaga() {
  yield takeEvery(filmActionTypes.GET_FILMS_REQUEST, getFilmsCharacterSaga);
}
