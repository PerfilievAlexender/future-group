import {combineReducers} from 'redux';
import rows from './rows';
import search from './search';
import user from './user';
import pages from './pages';




const reducer = combineReducers({
    rows,
    search,
    user,
    pages
});

export default reducer;