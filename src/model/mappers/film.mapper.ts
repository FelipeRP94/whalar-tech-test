import moment from "moment";
import { FilmDTO } from "../../services/model/film.dto";
import { Film } from "../film.model";

export const mapFilmDTOtoModel = (filmDTO: FilmDTO): Film => ({
  title: filmDTO.title,
  releasedYears: yearDiffFromToday(filmDTO.release_date),
});

const yearDiffFromToday = (date: string) => {
  const today = new Date();

  const d1 = moment(today);
  const d2 = moment(date);

  return d1.diff(d2, "years");
};
