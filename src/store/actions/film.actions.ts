import { AnyAction } from "redux";
import { Film } from "../../model/film.model";

export const filmActionTypes = {
  GET_FILMS_REQUEST: "GET_FILMS_REQUEST",
  GET_FILMS_SUCCESS: "GET_FILMS_SUCCESS",
  GET_FILMS_ERROR: "GET_FILMS_ERROR",
};

export const getFilmsRequestAction = (urls: string[]): AnyAction => ({
  type: filmActionTypes.GET_FILMS_REQUEST,
  payload: urls,
});

export const getFilmsSuccessAction = (films: Film[]): AnyAction => ({
  type: filmActionTypes.GET_FILMS_SUCCESS,
  payload: films,
});

export const getFilmsErrorAction = (error: string): AnyAction => ({
  type: filmActionTypes.GET_FILMS_ERROR,
  payload: error,
});
