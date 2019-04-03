import React, {Component} from 'react';
import './style.css';
import {connect} from 'react-redux';
import {showUserForm} from '../../action-creators';
import {userFormShow} from '../../selectors'



class AddUserForm extends Component {

    state = {
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
    };

    render() {

        const {openForm} = this.props;

        if (!openForm) return null;

        return (
            <div className='addUserForm'>
                <div className='addUserForm__container'>
                    <button
                        className='addUserForm__close'
                        onClick={this.onChange}
                    >закрыть
                    </button>
                    <h2 className='addUserForm__title'>Добавить пользователя</h2>
                    <label htmlFor="addUserFormName"><strong>ID</strong>
                        <input
                            type="text"
                            onChange={this.onHandleChangeID}
                            id='addUserFormName'
                            name='addUserFormName'
                            value={this.state.id}
                            placeholder='id'
                            required
                        />
                    </label>
                    <label htmlFor="addUserFormFirstName"><strong>First name</strong>
                        <input
                            type="text"
                            onChange={this.onHandleChangeFirstName}
                            id='addUserFormFirstName'
                            name='addUserFormFirstName'
                            value={this.state.firstName}
                            placeholder='firstName'
                            required
                        />
                    </label>
                    <label htmlFor="addUserFormLastName"><strong>Last name</strong>
                        <input
                            type="text"
                            onChange={this.onHandleChangeLastName}
                            id='addUserFormLastName'
                            name='addUserFormLastName'
                            value={this.state.lastName}
                            placeholder='id'
                            required
                        />
                    </label>
                    <label htmlFor="addUserFormEmail"><strong>Email</strong>
                        <input
                            type="text"
                            onChange={this.onHandleChangeEmail}
                            id='addUserFormEmail'
                            name='addUserFormEmail'
                            value={this.state.email}
                            placeholder='email'
                            required
                        />
                    </label>
                    <label htmlFor="addUserFormPhone"><strong>Phone</strong>
                        <input
                            type="text"
                            onChange={this.onHandleChangePhone}
                            id='addUserFormPhone'
                            name='addUserFormPhone'
                            value={this.state.phone}
                            placeholder='phone'
                            required
                        />
                    </label>

                    <button
                        type='submit'
                        className="addUserForm__send-form"
                        onClick={this.onAddData}
                    >
                        Войти
                    </button>
                </div>
            </div>
        );

    };

    onHandleChangeID = (evt) => {
        this.setState({
            id: evt.target.value
        })
    };

    onHandleChangeFirstName = (evt) => {
        this.setState({
            firstName: evt.target.value
        })
    };

    onHandleChangeLastName = (evt) => {
        this.setState({
            lastName: evt.target.value
        })
    };

    onHandleChangeEmail = (evt) => {
        this.setState({
            email: evt.target.value
        })
    };

    onHandleChangePhone = (evt) => {
        this.setState({
            phone: evt.target.value
        })
    };

    onChange = () => {
        const {showUserForm} = this.props;
        showUserForm();
    };

    onAddData = (evt) => {

        evt.preventDefault();

        const {} = this.props;

        if (this.state.id && this.state.firstName && this.state.lastName && this.state.email && this.state.phone) {

        }


        this.setState({
            id: '',
            firstName: '',
            lastName: '',
            email: '',
            phone: ''
        });


    };
}


export default connect(
    (store) => ({
        openForm: userFormShow(store)
    })
    ,
    {showUserForm})(AddUserForm)