import { AnyAction } from "redux";
import { all, call, put } from "redux-saga/effects";
import { Character, CharactersState } from "../../../model/character.model";
import { Film } from "../../../model/film.model";
import { characterService } from "../../../services/characters.service";
import { filmService } from "../../../services/film.service";
import {
  getCharacterErrorAction,
  getCharacterSuccessAction,
} from "../../actions/characters.actions";
import {
  getCharactersErrorAction,
  getCharactersSuccessAction,
} from "../../actions/charactersList.actions";
import {
  getFilmsErrorAction,
  getFilmsSuccessAction,
} from "../../actions/film.actions";

export function* getCharactersListSaga(action: AnyAction) {
  try {
    const charactersState: CharactersState = yield call(
      characterService.getCharartersList,
      action.payload
    );

    yield put(getCharactersSuccessAction(charactersState));
  } catch (error) {
    yield put(getCharactersErrorAction(error.message));
  }
}

export function* getCharacterSaga(action: AnyAction) {
  try {
    const character: Character = yield call(
      characterService.getCharacter,
      action.payload
    );

    yield put(getCharacterSuccessAction(character));
  } catch (error) {
    yield put(getCharacterErrorAction(error.message));
  }
}

export function* getFilmsCharacterSaga(action: AnyAction) {
  try {
    const films: Film[] = yield all(
      action.payload.map((url: string) => call(filmService.getFilm, url))
    );

    yield put(getFilmsSuccessAction(films));
  } catch (error) {
    yield put(getFilmsErrorAction(error.message));
  }
}
