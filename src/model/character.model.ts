export interface CharactersState {
  count: number;
  nextPageUrl?: string;
  previousPageUrl?: string;
  characters: Character[];
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
}

export const createDefaultCharactersState = (): CharactersState => ({
  count: 0,
  characters: [],
});
