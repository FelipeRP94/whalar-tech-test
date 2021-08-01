import {
  CharactersState,
  createDefaultCharactersState,
} from "../model/charactersState.model";

export interface ReduxState {
  charactersState: CharactersState;
}

export const createDefaultReduxState = (): ReduxState => ({
  charactersState: createDefaultCharactersState(),
});
