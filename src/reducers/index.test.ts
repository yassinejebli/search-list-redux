import reducer, { initialState } from "./index";
import { SET_SEARCH_TEXT } from "../actions";

describe("reducer", () => {
  it("should set search text in redux state", () => {
    expect(
      reducer(initialState, {
        type: SET_SEARCH_TEXT,
        payload: {
          searchText: "milk",
        },
      })
    ).toEqual({
      ...initialState,
      searchText: "milk",
    });
  });
});
