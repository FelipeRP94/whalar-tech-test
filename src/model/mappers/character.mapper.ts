import { CharacterDTO } from "../../services/model/character.dto";
import { CharacterResponseDTO } from "../../services/model/characterResponse.dto";
import {
  Character,
  CharactersState,
  createDefaultCharacter,
} from "../character.model";

export const mapCharacterResponseDTOToStateModel = (
  characterResponse: CharacterResponseDTO
): CharactersState => ({
  count: characterResponse.count,
  nextPageUrl: characterResponse.next,
  previousPageUrl: characterResponse.previous,
  characters: characterResponse.results.map((character) =>
    mapCharacterDTOtoModel(character)
  ),
  selectedCharacter: createDefaultCharacter(),
});

export const mapCharacterDTOtoModel = (
  character: CharacterDTO,
  mapFilms = false
): Character => ({
  name: character.name,
  height: character.height,
  mass: character.mass,
  hairColor: character.hair_color,
  skinColor: character.skin_color,
  eyeColor: character.eye_color,
  birthYear: character.birth_year,
  gender: character.gender,
  filmsUrl: character.films,
  url: character.url,
});
