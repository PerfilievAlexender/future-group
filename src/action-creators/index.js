import {
    GET_DATA,
    SELECT_COLUMN,
    SORT_COLUMN,
    SEARCH,
    START,
    SUCCESS,
    SHOW_USER,
    OPEN_USER_FORM,
    ADD_NEW_USER,
    PAGE
} from '../constants'

export function getData() {

    return (dispatch) => {

        dispatch({
            type: GET_DATA + START
        });

        fetch('http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}', {
                method: "GET",
            }
        )
            .then((response) => response.json())
            .then((rows) => {
                dispatch({
                    type: GET_DATA + SUCCESS,
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

export function findRows(searchValue) {
    return {
        type: SEARCH,
        payload: searchValue
    }
}

export function showUser(user) {
    return {
        type: SHOW_USER,
        payload: user
    }
}

export function showUserForm() {
    return {
        type: OPEN_USER_FORM,
    }
}

export function addNewUser(newUser) {
    return {
        type: ADD_NEW_USER,
        payload: newUser
    }
}

export function newPage(page) {
    return {
        type: PAGE,
        payload: page
    }
}

