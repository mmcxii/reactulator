import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './Nav.scss';

class Nav extends Component {
    render() {
        return (
            <nav className='nav'>
                <ul className='nav__list'>
                    <li className='nav__item'>
                        <NavLink className='nav__link' exact to='/'>
                            The Calculator
                        </NavLink>
                    </li>
                    <li className='nav__item'>
                        <NavLink className='nav__link' to='/about'>
                            About
                        </NavLink>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Nav;
