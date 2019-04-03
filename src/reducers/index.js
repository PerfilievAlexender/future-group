import {combineReducers} from 'redux';
import rows from './rows'
import search from './search'
import user from './user'



const reducer = combineReducers({
    rows,
    search,
    user
});

export default reducer;