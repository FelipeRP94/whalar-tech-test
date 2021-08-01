import { AnyAction } from "redux";
import { Character } from "../../model/character.model";
import {
  CharactersState,
  createDefaultCharactersState,
} from "../../model/charactersState.model";
import { characterActionTypes } from "../actions/character.actions";
import { charactersListActionTypes } from "../actions/charactersList.actions";
import { Film } from "../../model/film.model";
import { filmActionTypes } from "../actions/film.actions";

export const charactersReducer = (
  state = createDefaultCharactersState(),
  action: AnyAction
): CharactersState => {
  const { type, payload } = action;

  switch (type) {
    case charactersListActionTypes.GET_CHARACTERS_LIST_SUCCESS:
      return handleGetCharactersListSuccess(state, payload);
    case charactersListActionTypes.GET_CHARACTERS_LIST_ERROR:
      return handleError(state, payload);
    case characterActionTypes.GET_CHARACTER_SUCCESS:
      return handleGetCharacterSuccess(state, payload);
    case characterActionTypes.GET_CHARACTER_ERROR:
      return handleError(state, payload);
    case filmActionTypes.GET_FILMS_SUCCESS:
      return handleGetFilmsSuccess(state, payload);
    case filmActionTypes.GET_FILMS_ERROR:
      return handleError(state, payload);

    default:
      return state;
  }
};

const handleGetCharactersListSuccess = (
  state: CharactersState,
  characters: CharactersState
): CharactersState => ({
  ...state,
  ...characters,
  error: "",
});

const handleGetCharacterSuccess = (
  state: CharactersState,
  selectedCharacter: Character
): CharactersState => ({
  ...state,
  error: "",
  selectedCharacter,
});

const handleError = (
  state: CharactersState,
  error: string
): CharactersState => ({
  ...state,
  error,
});

const handleGetFilmsSuccess = (
  state: CharactersState,
  films: Film[]
): CharactersState => ({
  ...state,
  error: "",
  selectedCharacter: {
    ...state.selectedCharacter,
    films,
  },
});
