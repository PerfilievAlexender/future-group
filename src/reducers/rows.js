import {GET_SMALL_DATA} from '../constants'

export default (rows = [], action) => {

    const {payload, type} = action;

    switch (type) {
        case GET_SMALL_DATA:
            return rows = payload;
        default:
            return rows
    }

};