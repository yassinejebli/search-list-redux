import thunk, { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { initialState, State } from "../reducers";
import createMockStore from "redux-mock-store";
import { FILTER_TEXT_ITEMS, SET_SEARCH_TEXT, setSearchText } from "./index";

type DispatchType = ThunkDispatch<State, {}, AnyAction>;

const mockStore = createMockStore<State, DispatchType>([thunk]);

describe("actions", () => {
  it("should filter text items after setting search text", async () => {
    const store = mockStore(initialState);

    const expectedActions = [
      {
        type: SET_SEARCH_TEXT,
        payload: {
          searchText: "milk",
        },
      },
      {
        type: FILTER_TEXT_ITEMS,
      },
    ];
    await store.dispatch(setSearchText("milk"));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
