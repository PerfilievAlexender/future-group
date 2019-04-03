import {
    GET_SMALL_DATA,
    SELECT_COLUMN,
    SORT_COLUMN
} from '../constants';

const initialState = {
    rowsList: [],
    loading: false,
    loaded: false,
    sort: {
        direction: null,
        columnName: ''
    }
};

export default (rows = initialState, action) => {

    const {payload, type} = action;
    console.log('reduser', payload)
    switch (type) {
        
        case GET_SMALL_DATA:
            return {
                ...rows,
                rowsList: payload
            }
        case SELECT_COLUMN:
            return {
                ...rows,
                sort: {
                   ...rows.sort,
                   columnName: payload.name,
                   direction: payload.sort 
                }   
            }

        case SORT_COLUMN:
            
            return {
                ...rows,
                rowsList: payload
            }
        default:
            return rows
    }
};