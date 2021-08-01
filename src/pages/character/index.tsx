import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Character } from "../../model/character.model";
import { getFilmsRequestAction } from "../../store/actions/film.actions";
import { ReduxState } from "../../store/reduxState";
import { AttributeInfo } from "./components/attributeInfo.component";

export default function CharacterPage() {
  const { selectedCharacter } = useSelector(
    (state: ReduxState) => state.charactersState
  );
  const dispatch = useDispatch();
  const router = useRouter();
  const films = useSelector(
    (state: ReduxState) => state.charactersState.selectedCharacter?.films
  );

  const backToList = () => router.back();
  const {
    height,
    mass,
    gender,
    filmsUrl,
    hairColor,
    eyeColor,
    skinColor,
    birthYear,
  } = selectedCharacter as Character;

  const filmsCount = films ? films.length : 0;

  useEffect(() => {
    dispatch(getFilmsRequestAction(filmsUrl));
  }, [selectedCharacter.name, dispatch, filmsUrl]);

  return (
    <div className="character-page">
      <span className="back" onClick={backToList}>
        Back to main list
      </span>
      <p className="character--name">{selectedCharacter.name}</p>
      <fieldset>
        <legend>Information</legend>
        <div className="character-list">
          <AttributeInfo title="Height" data={`${height}cm`} />
          <AttributeInfo title="Gender" data={`${gender}`} />
          <AttributeInfo title="Mass" data={`${mass}kg`} />
          <AttributeInfo title="Hair color" data={`${hairColor}`} />
          <AttributeInfo title="Eye color" data={`${eyeColor}`} />
          <AttributeInfo title="Skin color" data={`${skinColor}`} />
          <AttributeInfo title="Birth year" data={`${birthYear}`} />
        </div>
      </fieldset>
      <fieldset>
        <legend>{`${filmsCount} film${filmsCount > 1 ? "s" : ""}`}</legend>
        <ul>
          {films?.map((film, idx) => (
            <li key={idx}>{`${film.title}: ${film.releasedYears} ago`}</li>
          ))}
        </ul>
      </fieldset>
    </div>
  );
}
