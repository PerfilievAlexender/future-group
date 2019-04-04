import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getSmallData, selectColumn, showUserForm, sortRows} from '../../action-creators'
import {filteredRows, sortOrder, loadingData} from '../../selectors';
import Row from '../row';
import Loader from '../loader';
import {INCREASE, DECREASE} from '../../constants';
import './style.css';
import AddUserForm from "../addUserForm";
import PageSwitcher from '../pageSwitcher'

class Table extends Component {

    render() {

        const {data, loading} = this.props;
        const a = 0;
        const b = 10;

        const rows = data.slice([a], [b]).map((row) => {
            return (
                <Row
                    key={row.id + Math.random()}
                    row={row}
                />
            )
        });

        if (loading) return <Loader/>;

        return (
            <section className='table-wrapper'>
                <AddUserForm/>
                <button
                    onClick={this.onShowAddUserForm}
                >Добавить</button>
                <PageSwitcher/>
                <table className='table'>
                    <thead>
                    <tr onClick = {this.onHandleClickSort}>
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
            </section>
        );
    };

    onHandleClickSort = (evt) => {
        const {selectColumn, data, sortRows, sortOrder} = this.props;

        let sortOrderColumn = sortOrder !== INCREASE ? INCREASE : DECREASE;

        selectColumn(evt.target.value, sortOrderColumn);
        sortRows(data)
    };

    onShowAddUserForm = () => {
        const {showUserForm} = this.props;
        showUserForm()
    };

    componentDidMount() {
        const {getSmallData} = this.props;
        getSmallData();
    };

}


export default connect(
    (store) => ({
        data: filteredRows(store),
        sortOrder: sortOrder(store),
        loading: loadingData(store)
    }),
    {getSmallData, selectColumn, sortRows, showUserForm}
)(Table);