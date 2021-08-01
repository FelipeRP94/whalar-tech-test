import { Character } from "../../model/character.model";

interface Props {
  character: Character;
}

export const CharacterComponent = (props: Props) => {
  const { character } = props;
  const filmsCount = character.filmsUrl.length;

  return (
    <div className="character--container">
      <p className="character--name">{character.name}</p>
      <div className="character--info">
        <p>{`${filmsCount} film${filmsCount > 1 ? "s" : ""}`}</p>
        <p>{`Birth year ${character.birthYear}`}</p>
      </div>
    </div>
  );
};
