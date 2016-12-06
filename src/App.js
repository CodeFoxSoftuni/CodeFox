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
                    <Link to="/shoppingcart">
                        <img src="http://www.iconsdb.com/icons/preview/orange/cart-19-xxl.png" alt="cart" id="cart"></img>
                    </Link>
                    <div className="nav-bar-link" id="helloUser">Hello, {this.state.username}!
                        <ul>
                            <li><Link to="/account" className="nav-bar-link">My Account</Link></li>
                            <li><Link to="/create" className="nav-bar-link">Create Offer</Link></li>
                            <li><Link to="/myOffers" className="nav-bar-link">My Offers</Link></li>
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
            "http://bit.ly/2goQGmm",
            "http://bit.ly/2gD1Dn9",
            "http://insd.vasyaa.com/templates/ammedical/images/services/Fashion%20Styling.jpg",
            "http://www.magic4walls.com/wp-content/uploads/2014/03/fashion-model-grass-pier-photography-sunset-hd-wallpaper.jpg",
            "http://images.forwallpaper.com/files/images/9/9e5c/9e5c8958/437085/eva-padberg.jpg",
            "http://p1.pichost.me/i/13/1364007.jpg",
            "https://images3.alphacoders.com/232/thumb-1920-232907.jpg",
            "http://insd.vasyaa.com/templates/ammedical/images/services/Fashion%20Styling.jpg"
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
