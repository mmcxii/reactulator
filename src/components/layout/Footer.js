import React, { Component } from 'react';
import './Footer.scss';

class Footer extends Component {
    render() {
        return (
            <footer className='footer'>
                <div className='container'>
                    <div className='byline'>
                        Nich Secord &copy; 2019
                        <br />
                        All Rights Reserved.
                    </div>

                    <section className='social'>
                        <ul className='social__list'>
                            <li className='social__item'>
                                <a href='https://www.github.com/mmcxii' className='social__link' target='new'>
                                    <i className='social__icon fab fa-github' />
                                </a>
                            </li>
                            <li className='social__item'>
                                <a
                                    href='https://www.linkedin.com/in/mmcxii'
                                    className='social__link'
                                    target='new'
                                >
                                    <i className='social__icon fab fa-linkedin-in' />
                                </a>
                            </li>
                            <li className='social__item'>
                                <a href='https://twitter.com/mmcxii__' className='social__link' target='new'>
                                    <i className='social__icon fab fa-twitter' />
                                </a>
                            </li>
                            <li className='social__item'>
                                <a href='https://www.secord.io' className='social__link' target='new'>
                                    <i className='social__icon far fa-code' />
                                </a>
                            </li>
                        </ul>
                    </section>
                </div>
            </footer>
        );
    }
}

export default Footer;
