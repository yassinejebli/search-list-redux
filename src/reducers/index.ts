import {FILTER_TEXT_ITEMS} from "../actions";

export interface State{
    allTextItems: string[];
    filteredTextItems: string[];
    searchText: string;
}

const textItems = ["Milk", "Coffee", "Oranges", "Bread"];

export const initialState: State = {
    allTextItems: textItems,
    filteredTextItems: textItems,
    searchText: '',
};

export default function reducer(state: State = initialState, action: {type: string, payload: any}): State{
    switch (action.type) {
        case FILTER_TEXT_ITEMS:
            return {
                ...state,
                searchText: action.payload.searchText,
                filteredTextItems: state.allTextItems.filter((textItem: string)=>textItem.toLowerCase().includes(action.payload.searchText.toLowerCase()))
            };
        default:
            return state;
    }
}
