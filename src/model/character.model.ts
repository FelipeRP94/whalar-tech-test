export interface CharactersState {
  count: number;
  next?: string;
  previous?: string;
  results: Character[];
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
}

export const createDefaultCharactersState = (): CharactersState => ({
  count: 0,
  results: [],
});
