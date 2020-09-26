export const FILTER_TEXT_ITEMS = 'LOAD_TEXT_ITEMS';
export const ADD_TEXT_ITEM = 'ADD_TEXT_ITEM';

export function filterTextItems(searchText: string) {
    return {
        type: FILTER_TEXT_ITEMS,
        payload: {
            searchText
        }
    };
}
