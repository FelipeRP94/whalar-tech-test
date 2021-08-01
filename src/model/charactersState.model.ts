import { Character, createDefaultCharacter } from "./character.model";

export interface CharactersState {
  count: number;
  nextPageUrl?: string;
  previousPageUrl?: string;
  characters: Character[];
  selectedCharacter: Character;
  error?: string;
}

export const createDefaultCharactersState = (): CharactersState => ({
  count: 0,
  characters: [],
  selectedCharacter: createDefaultCharacter(),
});
