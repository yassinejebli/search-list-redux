import {AnyAction} from "redux";
import {ThunkDispatch} from "redux-thunk";
import {State} from "../reducers";

export const FILTER_TEXT_ITEMS = 'LOAD_TEXT_ITEMS';
export const ADD_TEXT_ITEM = 'ADD_TEXT_ITEM';

export function filterTextItems(searchText: string){
    return (dispatch: ThunkDispatch<State, {}, AnyAction>, getState: () => State) => {
        const {textItems} = getState(); // get all text items to filter by search text
        dispatch({
            type: FILTER_TEXT_ITEMS,
            payload: textItems.filter((textItem: string)=>textItem.toLowerCase().includes(searchText.toLowerCase()))
        });
    }
}
