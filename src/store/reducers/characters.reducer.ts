import { AnyAction } from "redux";
import { createDefaultCharactersState } from "../../model/character.model";
import { charactersActionTypes } from "../actions/characters.actions";

export const charactersReducer = (
  state = createDefaultCharactersState(),
  action: AnyAction
) => {
  const { type, payload } = action;

  switch (type) {
    case charactersActionTypes.GET_CHARACTERS_SUCCESS:
      return payload;
    default:
      return state;
  }
};
