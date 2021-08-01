import { Character, createDefaultCharacter } from "../character.model";
import { CharacterDTO } from "../../services/dto/character.dto";
import { CharacterResponseDTO } from "../../services/dto/characterResponse.dto";
import { CharactersState } from "../charactersState.model";

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
