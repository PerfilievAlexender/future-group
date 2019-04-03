import { createSelector } from 'reselect'

export const columnName = (state) => state.rows.sort.columnName;

export const sortOrder = (state) => state.rows.sort.direction;

export const allRows = (state) => state.rows.rowsList;

export const filtredRows = createSelector(allRows, columnName,  (rows, name) => {
    return rows.sort((a, b) => {
        if (typeof a !== 'number' && a[name] > b[name]) return 1;
        if (typeof a !== 'number' && a[name] < b[name]) return -1;
        return a[name] - b[name];
    })
});