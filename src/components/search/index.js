import React, {Component} from 'react';
import {connect} from 'react-redux';
import {findRows} from '../../action-creators'
import './style.css';

class Search extends Component {

    state = {
        searchValue: ''
    };

    render() {
        return (
            <div className="search">
                <input
                    placeholder='Поиск'
                    onChange={this.onHandleChange}
                    value={this.state.searchValue}
                />
                <button
                    onClick={this.onHandleClick}
                >найти</button>
            </div>
        )
    };

    onHandleChange = (evt) => {
        this.setState({
            searchValue: evt.target.value
        })
    };

    onHandleClick = () => {
        const {findRows} = this.props;
        findRows(this.state.searchValue);
    };
}


export default connect(null, {findRows})(Search);