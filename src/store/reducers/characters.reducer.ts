import { AnyAction } from "redux";
import {
  Character,
  CharactersState,
  createDefaultCharactersState,
} from "../../model/character.model";
import { Film } from "../../model/film.model";
import { characterActionTypes } from "../actions/characters.actions";
import { charactersListActionTypes } from "../actions/charactersList.actions";
import { filmActionTypes } from "../actions/film.actions";

export const charactersReducer = (
  state = createDefaultCharactersState(),
  action: AnyAction
) => {
  const { type, payload } = action;

  switch (type) {
    case charactersListActionTypes.GET_CHARACTERS_LIST_SUCCESS:
      return payload;
    case characterActionTypes.GET_CHARACTER_SUCCESS:
      return handleGetCharacterSuccess(state, payload);
    case filmActionTypes.GET_FILMS_SUCCESS:
      return handleGetFilmsSuccess(state, payload);
    default:
      return state;
  }
};

const handleGetCharacterSuccess = (
  state: CharactersState,
  selectedCharacter: Character
) => ({
  ...state,
  selectedCharacter,
});

const handleGetFilmsSuccess = (state: CharactersState, films: Film[]) => ({
  ...state,
  selectedCharacter: {
    ...state.selectedCharacter,
    films,
  },
});
