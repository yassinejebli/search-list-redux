import { ADD_TEXT_ITEM, FILTER_TEXT_ITEMS, SET_SEARCH_TEXT } from "../actions";

export interface State {
  allTextItems: string[];
  filteredTextItems: string[];
  searchText: string;
}

const textItems = ["Milk", "Coffee", "Oranges", "Bread"];

export const initialState: State = {
  allTextItems: textItems,
  filteredTextItems: textItems,
  searchText: "",
};

export default function reducer(
  state: State = initialState,
  action: { type: string; payload: any }
): State {
  switch (action.type) {
    case SET_SEARCH_TEXT:
      return {
        ...state,
        searchText: action.payload.searchText,
      };
    case FILTER_TEXT_ITEMS:
      return {
        ...state,
        filteredTextItems: state.allTextItems.filter((textItem: string) =>
          textItem.toLowerCase().includes(state.searchText.toLowerCase())
        ),
      };
    case ADD_TEXT_ITEM:
      return {
        ...state,
        allTextItems: [action.payload.textItem, ...state.allTextItems],
      };
    default:
      return state;
  }
}
