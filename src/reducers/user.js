import {
    SHOW_USER,
} from '../constants';

const initialState = {
    userData: '',
    active: false
};

export default (user = initialState, action) => {

    const {payload, type} = action;

    switch (type) {

        case SHOW_USER:
            return {
                ...user,
                userData: payload,
                active: true
            };

        default:
            return user;
    }
};