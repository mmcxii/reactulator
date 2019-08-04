import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Calculator from './components/Calculator';
import About from './components/pages/About';

import './sass/main.scss';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className='App'>
                    <Header />
                    <div className='container'>
                        <Route path='/reactulator' component={Calculator} />
                        <Route path='/reactulator/about' component={About} />
                    </div>

                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App;
