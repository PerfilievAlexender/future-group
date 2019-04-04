import React, {Component} from 'react';
import Search from '../search'
import './style.css';
import {connect} from 'react-redux';
import {showUserForm} from '../../action-creators';


class Header extends Component {

    render() {

        return (
           <header className='header'>
               <Search />
               <button
                   className='header__table-add  btn'
                   onClick={this.onShowAddUserForm}
               >Добавить</button>
           </header>
        );
    };

    onShowAddUserForm = () => {
        const {showUserForm} = this.props;
        showUserForm()
    };
}


export default connect(
    null,
    {showUserForm}
)(Header);