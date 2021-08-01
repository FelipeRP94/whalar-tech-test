import { useRouter } from "next/dist/client/router";
import { useDispatch } from "react-redux";
import { Character } from "../../model/character.model";
import { getCharacterRequestAction } from "../../store/actions/characters.actions";

interface Props {
  character: Character;
}

export const CharacterComponent = (props: Props) => {
  const { character } = props;
  const filmsCount = character.filmsUrl.length;
  const dispatch = useDispatch();
  const router = useRouter();

  const showCharacterInfo = () => {
    dispatch(getCharacterRequestAction(character.url));
    router.push("/character");
  };

  return (
    <div className="character--container" onClick={showCharacterInfo}>
      <p className="character--name">{character.name}</p>
      <div className="character--info">
        <p>{`${filmsCount} film${filmsCount > 1 ? "s" : ""}`}</p>
        <p>{`Birth year ${character.birthYear}`}</p>
      </div>
    </div>
  );
};
