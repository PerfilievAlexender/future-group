import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getSmallData} from '../../action-creators'
import {rowsSmallData} from '../../selectors';
import Row from '../row'
import './style.css';


class Table extends Component {

    render() {

        const {data} = this.props;

        const rows = data.map((row) => {
            return <Row
                key={row.id}
                row={row}
            />
        });

        const dataRows = rows ? rows : null;

        return (
            <table className='table'>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>firstName</th>
                        <th>lastName</th>
                        <th>email</th>
                        <th>phone</th>
                    </tr>
                    {dataRows}
                </thead>
            </table>
        );
    };

    componentDidMount() {
        const {getSmallData} = this.props;

        getSmallData();
    };
}


export default connect(
    (store) => ({
        data: rowsSmallData(store)
    }),
    {getSmallData}
)(Table);