import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getSmallData, selectColumn, sortRows} from '../../action-creators'
import {filtredRows, sortOrder} from '../../selectors';
import Row from '../row';
import {INCREASE, DECREASE} from '../../constants'
import './style.css';


class Table extends Component {

    render() {

        const {data} = this.props;

        const rows = data.map((row) => {
            return <Row
                key={row.id + Math.random()}
                row={row}
            />
        });

        if (!rows) return <h1>...Loading</h1>

        return (
            <table className='table'>
                <thead>
                    <tr onClick = {this.onHandleClick}>
                        <th><button
                                value = 'id'
                            >id</button>
                        </th>
                        <th><button
                                value = 'firstName'
                            >firstName</button>
                        </th>
                        <th><button
                                value = 'lastName'
                            >lastName</button>
                        </th>
                        <th><button
                                value = 'email'
                            >email</button>
                        </th>
                        <th><button
                                value = 'phone'
                            >phone</button>
                        </th>
                    </tr>
                    {rows}
                </thead>
            </table>
        );
    };

    onHandleClick = (evt) => {
        const {selectColumn, data, sortRows, sortOrder} = this.props;

        let sortOrderColumn = sortOrder !== INCREASE ? INCREASE : DECREASE;

        selectColumn(evt.target.value, sortOrderColumn);
        sortRows(data)
    };

    componentDidMount() {
        const {getSmallData} = this.props;
        getSmallData();
    };

}


export default connect(
    (store) => ({
        data: filtredRows(store),
        sortOrder: sortOrder(store) 
    }),
    {getSmallData, selectColumn, sortRows}
)(Table);