import { Character } from "../model/character.model";
import { CharacterComponent } from "../components/charactersListPage/character.component";
import { ErrorAlert } from "../components/modules/error/error.component";
import { getCharactersRequestAction } from "../store/actions/charactersList.actions";
import { ReduxState } from "../store/reduxState";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export default function CharacterListPage() {
  const dispatch = useDispatch();
  const { characters, nextPageUrl, previousPageUrl, error } = useSelector(
    (state: ReduxState) => state.charactersState
  );

  useEffect(() => {
    dispatch(getCharactersRequestAction());
  }, [dispatch]);

  const showMore = () => dispatch(getCharactersRequestAction(nextPageUrl));
  const showPrevious = () =>
    dispatch(getCharactersRequestAction(previousPageUrl));

  return error ? (
    <ErrorAlert error={error} />
  ) : (
    <>
      <h2>Star Wars characters</h2>

      <div className="container">
        <div className="character-list">
          {characters.map((character: Character, idx: number) => (
            <CharacterComponent character={character} key={idx} />
          ))}
        </div>
      </div>
      <div className="pagination">
        {previousPageUrl && (
          <button className="button" onClick={showPrevious}>
            Back
          </button>
        )}
        {nextPageUrl && (
          <button className="button" onClick={showMore}>
            Show more
          </button>
        )}
      </div>
    </>
  );
}
