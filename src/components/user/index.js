import React, {Component} from 'react';
import {connect} from 'react-redux';
import {userData, userActive} from '../../selectors'
import './style.css'

class User extends Component {
    render() {

        const {user, show} = this.props;
        console.log(user.address);

        if (!show) return null;

        return (
            <section className='user'>
                Выбран пользователь <b>{user.firstName} {user.lastName}</b>
                Описание:
                <p>{user.description}</p>
                Адрес проживания: <b>{user.address.streetAddress}</b>
                Город: <b>{user.address.city}</b>
                Провинция/штат: <b>{user.address.state}</b>
                Индекс: <b>{user.address.zip}</b>
            </section>
        );
    };
}

export default connect(
    (store) => ({
        user: userData(store),
        show: userActive(store)
    })
)(User);