import { Film } from "../film.model";
import { FilmDTO } from "../../services/dto/film.dto";
import { yearsDiffFromToday } from "../../common/utils/date.utils";

export const mapFilmDTOtoModel = (filmDTO: FilmDTO): Film => ({
  title: filmDTO.title,
  releasedYears: yearsDiffFromToday(filmDTO.release_date),
});
