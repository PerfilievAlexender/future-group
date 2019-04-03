import React, {Component} from 'react';
import Search from '../search'
import './style.css';


class Header extends Component {

    render() {

        return (
           <header className='header'>
               <Search />
           </header>
        );
    };
}


export default Header;