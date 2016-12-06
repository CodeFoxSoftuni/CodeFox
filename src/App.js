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
import './Styles/Cart-Styles.css';

import $ from 'jquery';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {loggedIn: false, username: ''};
        observer.onSessionUpdate = this.onSessionUpdate.bind(this);
    }

    onSessionUpdate() {
        let name = sessionStorage.getItem("username");
        if (name) {
            this.setState({loggedIn: true, username: sessionStorage.getItem("username")});
        } else {
            this.setState({loggedIn: false, username: ''});
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
                    <Link to="/shoppingCart" className="nav-bar-link">Cart</Link>
                    <div className="nav-bar-link" id="helloUser">Hello, {this.state.username}!
                        <ul>
                            <li><Link to="/account" className="nav-bar-link">My Account</Link></li>
                            <li><Link to="/create" className="nav-bar-link">Create Offer</Link></li>
                            <li><Link to="/myOffers" className="nav-bar-link">My Offers</Link></li>
                            <li><Link to="/sendMsg" className="nav-bar-link">Send Message</Link></li>
                            <li><Link to="/messages" className="nav-bar-link">Messages</Link></li>
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
                <InfoBox/>
                <main id="main">
                    {this.props.children}
                </main>
                <Footer/>
            </div>
        )
    }
    componentDidMount() {
        let images = [
            "http://bit.ly/2gz8s6u"
        ];
        let i = 0;
        setInterval(function () {
            $('body').css("background", "url(" + images[i] + ")");
            i += 1;
            if (i === images.length) {
                i = 0;
            }
        }, 6100);
        this.onSessionUpdate();
        let divHeight = Number($('#header-wrap').height()) / 16;
        $('#main').css('margin-top', divHeight + 'em');
        $(document)
            .one('focus.autoExpand', 'textarea.autoExpand', function () {
                let savedValue = this.value;
                this.value = '';
                this.baseScrollHeight = this.scrollHeight;
                this.value = savedValue;
            })
            .on('input.autoExpand', 'textarea.autoExpand', function () {
                let minRows = this.getAttribute('data-min-rows') | 0, rows;
                this.rows = minRows;
                rows = Math.ceil((this.scrollHeight - this.baseScrollHeight) / 17);
                this.rows = minRows + rows;
            });
    }
}

export default App;
