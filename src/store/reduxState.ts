import {
  CharactersState,
  createDefaultCharactersState,
} from "../model/character.model";

export interface ReduxState {
  charactersState: CharactersState;
}

export const createDefaultReduxState = (): ReduxState => ({
  charactersState: createDefaultCharactersState(),
});
