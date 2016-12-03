import React, {Component} from 'react';
import {Link} from 'react-router';

import Footer from './Components/Footer'
import Header from './Components/Header';

import InfoBox from './Components/Infobox';
import Navbar from './Components/Navbar';

import observer from './model/observer';

import './App.css';
import './Styles/Forms-Styles.css';
import './Styles/allOffers-Styles.css';
import './Styles/createOffer-Styles.css';
import './Styles/myAccount-Style.css'
import './Styles/aboutTheTeam-Styles.css';
import './Styles/contacts-Styles.css';

import $ from 'jquery';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { loggedIn: false, username: '' };
        observer.onSessionUpdate = this.onSessionUpdate.bind(this);
    }

    onSessionUpdate() {
        let name = sessionStorage.getItem("username");
        if (name) {
            this.setState({ loggedIn: true, username: sessionStorage.getItem("username") });
        } else {
            this.setState({ loggedIn: false, username: '' });
        }
    }

    render() {
        let navbar = {};
        if (!this.state.loggedIn) {
            navbar = (
                <Navbar>
                    <Link to="/" className="nav-bar-link" onlyActiveOnIndex={true}>Home</Link>
                    <Link to="/login" className="nav-bar-link">Login</Link>
                    <Link to="/register" className="nav-bar-link">Register</Link>
                    <Link to="/offers" className="nav-bar-link">All offers</Link>
                </Navbar>
            );
        } else {
            navbar = (
                <Navbar>
                    <Link to="/" className="nav-bar-link" onlyActiveOnIndex={true}>Home</Link>
                    <Link to="/offers" className="nav-bar-link">All offers</Link>
                    <div className="nav-bar-link" id="helloUser">Hello, {this.state.username}!
                        <ul>
                            <li><Link to="/account" className="nav-bar-link">My Account</Link></li>
                            <li><Link to="/create" className="nav-bar-link">Create Offer</Link></li>
                            <li><a href="#" className="nav-bar-link">My Offers</a></li>
                            <li><Link to="/logout" className="nav-bar-link">Logout</Link></li>
                        </ul>
                    </div>
                </Navbar>
            );
        }
        return (
            <div className="App">
                <Header username={this.state.username}>
                    {navbar}
                </Header>
                <div className="dynamic-container">
                <main id="main"></main>
                {this.props.children}
                </div>
                <Footer/>
                <InfoBox/>
            </div>
        )
    }

    componentDidMount() {
        this.onSessionUpdate();
        let divHeight = Number($('#header-wrap').height()) / 16;
        $('#main').css('margin-top', divHeight + 'em');
        $(document)
            .one('focus.autoExpand', 'textarea.autoExpand', function () {
                var savedValue = this.value;
                this.value = '';
                this.baseScrollHeight = this.scrollHeight;
                this.value = savedValue;
            })
            .on('input.autoExpand', 'textarea.autoExpand', function () {
                var minRows = this.getAttribute('data-min-rows') | 0, rows;
                this.rows = minRows;
                rows = Math.ceil((this.scrollHeight - this.baseScrollHeight) / 17);
                this.rows = minRows + rows;
            });
    }
}

export default App;
