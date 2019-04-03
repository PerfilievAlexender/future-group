import {
    GET_SMALL_DATA,
    SELECT_COLUMN,
    SORT_COLUMN
} from '../constants'

export function getSmallData() {

    return (dispatch) => {
        console.log('get data');
        fetch('http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}', {
                method: "GET",
            }
        )
            .then((response) => response.json())
            .then((rows) => {
                dispatch({
                    type: GET_SMALL_DATA,
                    payload: rows
                });
            })
            .catch((error) => {
                console.log(error)
            });
    };

}

export function selectColumn(columnName, sortOrderColumn) {
    return {
        type: SELECT_COLUMN,
        payload: {
            name: columnName,
            sort: sortOrderColumn
        }
    }
}

export function sortRows(sortedRows) {
    return {
        type: SORT_COLUMN,
        payload: sortedRows
    }
}