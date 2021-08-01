import {
  characterActionTypes,
  getCharacterRequestAction,
} from "../../store/actions/character.actions";

describe("getCharacterRequestAction", () => {
  const url = "https://swapi.dev/api/people/1/";

  it("Is a function", () => {
    // Assert
    expect(getCharacterRequestAction).toBeInstanceOf(Function);
  });

  it("Contains the expected type GET_CHARACTER_REQUEST", () => {
    // Act
    const action = getCharacterRequestAction(url);

    // Assert
    expect(action.type).toBe(characterActionTypes.GET_CHARACTER_REQUEST);
  });

  it("Contains the expected payload as character url", () => {
    // Act
    const action = getCharacterRequestAction(url);

    // Assert
    expect(action.payload).toBe(url);
  });
});
