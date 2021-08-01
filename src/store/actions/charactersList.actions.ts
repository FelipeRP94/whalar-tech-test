import { AnyAction } from "redux";
import { CharactersState } from "../../model/character.model";

export const charactersListActionTypes = {
  GET_CHARACTERS_LIST_REQUEST: "GET_CHARACTERS_LIST_REQUEST",
  GET_CHARACTERS_LIST_SUCCESS: "GET_CHARACTERS_LIST_SUCCESS",
  GET_CHARACTERS_LIST_ERROR: "GET_CHARACTERS_LIST_ERROR",
};

export const getCharactersRequestAction = (url?: string): AnyAction => ({
  type: charactersListActionTypes.GET_CHARACTERS_LIST_REQUEST,
  payload: url,
});

export const getCharactersSuccessAction = (
  newCharacterState: CharactersState
): AnyAction => ({
  type: charactersListActionTypes.GET_CHARACTERS_LIST_SUCCESS,
  payload: newCharacterState,
});

export const getCharactersErrorAction = (error: string): AnyAction => ({
  type: charactersListActionTypes.GET_CHARACTERS_LIST_ERROR,
  payload: error,
});
