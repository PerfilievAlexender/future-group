import {
    PAGE,
} from '../constants';

const initialState = {
    begin: 0,
    end: 49
};

export default (pages = initialState, action) => {

    const {payload, type} = action;

    switch (type) {

        case PAGE:
            return {
                begin: payload.begin,
                end: payload.end
            };

        default:
            return pages;
    }
};