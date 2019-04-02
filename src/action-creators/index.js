import {GET_SMALL_DATA} from '../constants'

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