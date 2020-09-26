import { State } from "../reducers";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

export const SET_SEARCH_TEXT = "SET_SEARCH_TEXT";
export const FILTER_TEXT_ITEMS = "FILTER_TEXT_ITEMS";
export const ADD_TEXT_ITEM = "ADD_TEXT_ITEM";

export function setSearchText(searchText: string) {
  return (dispatch: ThunkDispatch<State, {}, AnyAction>) => {
    dispatch({
      type: SET_SEARCH_TEXT,
      payload: {
        searchText,
      },
    });
    // Filter after setting search text
    dispatch(filterTextItems());
  };
}

function filterTextItems() {
  return {
    type: FILTER_TEXT_ITEMS,
  };
}

function makeRandomString() {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const charactersLength = characters.length;
  for (let i = 0; i < 5; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export function addTextItem() {
  return (dispatch: ThunkDispatch<State, {}, AnyAction>) => {
    dispatch({
      type: ADD_TEXT_ITEM,
      payload: {
        textItem: makeRandomString(),
      },
    });
    // Filter after adding a new text item to make sure that the displayed list respects the filter
    dispatch(filterTextItems());
  };
}
