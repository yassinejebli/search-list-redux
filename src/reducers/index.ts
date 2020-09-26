import {FILTER_TEXT_ITEMS} from "../actions";

export interface State{
    textItems: string[]; // All text items
    filteredItems: string[];
}

export const initialState: State = {
    textItems: ["Milk", "Coffee", "Oranges", "Bread"],
    filteredItems: [],
};

export default function reducer(state: State = initialState, action: {type: string, payload: any}): State{
    switch (action.type) {
        case FILTER_TEXT_ITEMS:
            return {
                ...state,
                filteredItems: action.payload
            };
        default:
            return state;
    }
}
