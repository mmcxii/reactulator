import React, { Component } from 'react';

import Nav from './Nav';

import './Header.scss';

class Header extends Component {
    render() {
        return (
            <header className='header'>
                <h1 className='header__title'>The Reactulator</h1>

                <Nav />
            </header>
        );
    }
}

export default Header;
