import { Character } from "../model/character.model";
import { CharactersState } from "../model/charactersState.model";
import {
  mapCharacterDTOtoModel,
  mapCharacterResponseDTOToStateModel,
} from "../model/mappers/character.mapper";
import { apiBaseRoute, defaultRequestConfig } from "./helpers";

const getCharartersList = (url?: string): Promise<CharactersState> => {
  const getCharartersURL = url || `${apiBaseRoute}/people`;

  return fetch(getCharartersURL, defaultRequestConfig)
    .then((response) => {
      if (response.ok) return response.json();
      throw new Error("Error getting characters");
    })
    .then((response) => mapCharacterResponseDTOToStateModel(response))
    .catch((error) => {
      throw new Error(error);
    });
};

const getCharacter = (url: string): Promise<Character> => {
  return fetch(url, defaultRequestConfig)
    .then((response) => {
      if (response.ok) return response.json();
      throw new Error("Error getting character");
    })
    .then((response) => mapCharacterDTOtoModel(response))
    .catch((error) => {
      throw new Error(error);
    });
};

export const characterService = {
  getCharartersList,
  getCharacter,
};
