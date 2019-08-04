import React, { Component } from 'react';
import './Footer.scss';

class Footer extends Component {
    render() {
        return (
            <footer className='footer'>
                <div className='byline'>
                    Nich Secord &copy; 2019
                    <br />
                    All Rights Reserved.
                </div>
            </footer>
        );
    }
}

export default Footer;
