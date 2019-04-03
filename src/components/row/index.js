import React, {Component} from 'react';
import {connect} from 'react-redux';
import {showUser} from "../../action-creators";
import './style.css';


class Row extends Component {

    render() {

        const {row} = this.props;

        return (
            <tr
                className='row'
                onClick = {this.onHandleClickRead}
            >
                <td>{row.id}</td>
                <td>{row.firstName}</td>
                <td>{row.lastName}</td>
                <td>{row.email}</td>
                <td>{row.phone}</td>
            </tr>
        );
    };

    onHandleClickRead = () => {
        const {row, showUser} = this.props;

        showUser(row)
    };
}


export default connect(
    null,
    {showUser}
)(Row);