import { Film } from "../model/film.model";
import { mapFilmDTOtoModel } from "../model/mappers/film.mapper";
import { defaultRequestConfig } from "./helpers";

const getFilm = (url: string): Promise<Film> => {
  return fetch(url, defaultRequestConfig)
    .then((response) => {
      if (response.ok) return response.json();
      throw new Error("Error getting film information");
    })
    .then((response) => mapFilmDTOtoModel(response))
    .catch((error) => {
      throw new Error(error);
    });
};

export const filmService = {
  getFilm,
};
