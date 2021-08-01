import {
  CharactersState,
  createDefaultCharactersState,
} from "../../model/charactersState.model";
import { charactersListActionTypes } from "../../store/actions/charactersList.actions";
import { charactersReducer } from "../../store/reducers/characters.reducer";

describe("charactersReducer", () => {
  let originalState: CharactersState;

  beforeEach(() => {
    originalState = createDefaultCharactersState();
  });

  it("Should return same state when passing a not expected action", () => {
    // Arrange
    const fakeAction = {
      type: "FAKE_ACTION",
      payload: "",
    };

    // Act
    const newState = charactersReducer(originalState, fakeAction);

    // Assert
    expect(newState).toBe(originalState);
  });

  it("Should return new state with characters information when passing a succes action", () => {
    // Arrange
    const getCharacterListSuccessAction = {
      type: charactersListActionTypes.GET_CHARACTERS_LIST_SUCCESS,
      payload: {
        count: 82,
        nextPageUrl: "https://swapi.dev/api/people/?page=2",
        previousPageUrl: null,
        characters: [
          {
            name: "Luke Skywalker",
            height: "172",
            mass: "77",
            hair_color: "blond",
            skin_color: "fair",
            eye_color: "blue",
            birth_year: "19BBY",
            gender: "male",
            films: [
              "https://swapi.dev/api/films/1/",
              "https://swapi.dev/api/films/2/",
              "https://swapi.dev/api/films/3/",
              "https://swapi.dev/api/films/6/",
            ],
            url: "https://swapi.dev/api/people/1/",
          },
        ],
      },
    };

    // Act
    const newState = charactersReducer(
      originalState,
      getCharacterListSuccessAction
    );

    // Assert
    expect(newState).toStrictEqual({ ...originalState, ...newState });
  });
});
