import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharactersRequestAction } from "../store/actions/charactersList.actions";
import { ReduxState } from "../store/reduxState";
import { CharacterComponent } from "./components/character.component";

export default function CharacterListPage() {
  const dispatch = useDispatch();
  const { characters, nextPageUrl, previousPageUrl } = useSelector(
    (state: ReduxState) => state.charactersState
  );

  useEffect(() => {
    dispatch(getCharactersRequestAction());
  }, []);

  const showMore = () => dispatch(getCharactersRequestAction(nextPageUrl));
  const showPrevious = () =>
    dispatch(getCharactersRequestAction(previousPageUrl));

  return (
    <>
      <div className="container">
        <div className="character-list">
          {characters.map((character, idx) => (
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
