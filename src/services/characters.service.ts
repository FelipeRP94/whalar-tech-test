import { CharactersState } from "../model/character.model";
import { mapCharacterResponseDTOToStateModel } from "../model/mappers/character.mapper";
import { apiBaseRoute, defaultRequestConfig } from "./helpers";

const getChararters = (url?: string): Promise<CharactersState> => {
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

export const characterService = {
  getChararters,
};
