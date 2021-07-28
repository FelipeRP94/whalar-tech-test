import { AnyAction } from "redux";
import { CharactersState } from "../../model/character.model";

export const charactersActionTypes = {
  GET_CHARACTERS_REQUEST: "GET_CHARACTERS_REQUEST",
  GET_CHARACTERS_SUCCESS: "GET_CHARACTERS_SUCCESS",
  GET_CHARACTERS_ERROR: "GET_CHARACTERS_ERROR",
};

export const getCharactersRequestAction = (url?: string): AnyAction => ({
  type: charactersActionTypes.GET_CHARACTERS_REQUEST,
  payload: url,
});

export const getCharactersSuccessAction = (
  newCharacterState: CharactersState
): AnyAction => ({
  type: charactersActionTypes.GET_CHARACTERS_SUCCESS,
  payload: newCharacterState,
});

export const getCharactersErrorAction = (error: string): AnyAction => ({
  type: charactersActionTypes.GET_CHARACTERS_ERROR,
  payload: error,
});
