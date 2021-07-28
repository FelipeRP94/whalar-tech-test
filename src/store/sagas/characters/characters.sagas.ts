import { AnyAction } from "redux";
import { call, put } from "redux-saga/effects";
import { CharactersState } from "../../../model/character.model";
import { characterService } from "../../../services/characters.service";
import {
  getCharactersErrorAction,
  getCharactersSuccessAction,
} from "../../actions/characters.actions";

export function* getCharactersSagas(action: AnyAction) {
  try {
    const charactersState: CharactersState = yield call(
      characterService.getChararters,
      action.payload
    );

    yield put(getCharactersSuccessAction(charactersState));
  } catch (error) {
    yield put(getCharactersErrorAction(error));
  }
}
