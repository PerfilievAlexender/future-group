import {
    GET_DATA, OPEN_USER_FORM,
    SELECT_COLUMN,
    SORT_COLUMN,
    START,
    SUCCESS,
    ADD_NEW_USER
} from '../constants';

const initialState = {
    rowsList: [],
    loading: false,
    loaded: false,
    sort: {
        direction: null,
        columnName: ''
    },
    userFormOpen: false
};

export default (rows = initialState, action) => {

    const {payload, type} = action;

    switch (type) {
        
        case GET_DATA + START:
            return {
                ...rows,
                loading: true,
                loaded: false
            };

        case GET_DATA + SUCCESS:
            return {
                ...rows,
                rowsList: payload,
                loading: false,
                loaded: true
            };

        case SELECT_COLUMN:
            return {
                ...rows,
                sort: {
                   ...rows.sort,
                   columnName: payload.name,
                   direction: payload.sort 
                }   
            };

        case SORT_COLUMN:
            
            return {
                ...rows,
                rowsList: payload
            };

        case OPEN_USER_FORM:
            return {
                ...rows,
                userFormOpen: !rows.userFormOpen
            }

        case ADD_NEW_USER:
            rows.rowsList.unshift(...payload)
            return {
                ...rows,
                rowsList: [...rows.rowsList]
            }

        default:
            return rows
    }
};