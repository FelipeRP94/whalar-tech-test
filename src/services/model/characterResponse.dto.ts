import { CharacterDTO } from "./character.dto";

export interface CharacterResponseDTO {
  count: number;
  next?: string;
  previous?: string;
  results: CharacterDTO[];
}
