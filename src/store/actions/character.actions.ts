import { AnyAction } from "redux";
import { Character } from "../../model/character.model";

export const characterActionTypes = {
  GET_CHARACTER_REQUEST: "GET_CHARACTER_REQUEST",
  GET_CHARACTER_SUCCESS: "GET_CHARACTER_SUCCESS",
  GET_CHARACTER_ERROR: "GET_CHARACTER_ERROR",
};

export const getCharacterRequestAction = (url: string): AnyAction => ({
  type: characterActionTypes.GET_CHARACTER_REQUEST,
  payload: url,
});

export const getCharacterSuccessAction = (character: Character): AnyAction => ({
  type: characterActionTypes.GET_CHARACTER_SUCCESS,
  payload: character,
});

export const getCharacterErrorAction = (error: string): AnyAction => ({
  type: characterActionTypes.GET_CHARACTER_ERROR,
  payload: error,
});
