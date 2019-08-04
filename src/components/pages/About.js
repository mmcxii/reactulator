import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <section className='about'>
                <h2 className='about__title'>About</h2>
                <p>
                    This is the first project I made on my own using React. It is a simple calculator, it
                    works as you would expect. The calculator itself is built using CSS Grid, and the rest of
                    the page relies on a little bit of Flexbox. I really enjoyed putting this very simple
                    project together, React's class-based components feel natural and easy to use, and the
                    fact that using Sass with React involves no additional hoops to jump through almost makes
                    it feel like I'm cheating somehow. I look forward to building more complex applications
                    with these powerful tools.
                </p>
            </section>
        );
    }
}

export default About;
