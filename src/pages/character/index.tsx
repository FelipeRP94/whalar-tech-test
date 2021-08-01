import { AttributeInfo } from "../../components/characterPage/attributeInfo.component";
import { ErrorAlert } from "../../components/modules/error/error.component";
import { Film } from "../../model/film.model";
import { getFilmsRequestAction } from "../../store/actions/film.actions";
import { ReduxState } from "../../store/reduxState";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";

export default function CharacterPage() {
  const { selectedCharacter, error } = useSelector(
    (state: ReduxState) => state.charactersState
  );
  const dispatch = useDispatch();
  const router = useRouter();

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
    films,
  } = selectedCharacter;

  const filmsCount = films ? films.length : 0;

  useEffect(() => {
    dispatch(getFilmsRequestAction(filmsUrl));
  }, [selectedCharacter.name, dispatch, filmsUrl]);

  return error && !selectedCharacter.name ? (
    <ErrorAlert error={error} />
  ) : (
    <div className="character-page">
      <span className="back" onClick={backToList}>
        Back to main list
      </span>
      <hr />
      <p className="character--name">{selectedCharacter.name}</p>
      <fieldset>
        <legend>Information</legend>
        <div className="information">
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
        {error ? (
          <ErrorAlert error={error} />
        ) : (
          <ul>
            {films?.map((film: Film, idx: number) => (
              <li
                key={idx}
              >{`${film.title}: ${film.releasedYears} years ago`}</li>
            ))}
          </ul>
        )}
      </fieldset>
    </div>
  );
}
