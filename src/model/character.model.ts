import { Film } from "./film.model";

export interface CharactersState {
  count: number;
  nextPageUrl?: string;
  previousPageUrl?: string;
  characters: Character[];
  selectedCharacter: Character;
}

export interface Character {
  name: string;
  height: string;
  mass: string;
  hairColor: string;
  skinColor: string;
  eyeColor: string;
  birthYear: string;
  gender: string;
  filmsUrl: string[];
  url: string;
  films?: Film[];
}

export const createDefaultCharacter = (): Character => ({
  name: "",
  height: "",
  mass: "",
  hairColor: "",
  skinColor: "",
  eyeColor: "",
  birthYear: "",
  gender: "",
  filmsUrl: [],
  url: "",
});

export const createDefaultCharactersState = (): CharactersState => ({
  count: 0,
  characters: [],
  selectedCharacter: createDefaultCharacter(),
});
