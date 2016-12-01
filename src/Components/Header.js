import React from 'react';
import '../Styles/Header-Styles.css'

export default class Header extends React.Component {
    render() {
        let username = this.props.username;
        if (username == null) {
            return (
                <div id="header-wrap">
                    <div id="header">
                        <div className="menu">
                            <a href="#" className="nav-bar-link" onClick={this.props.homeClicked}>Home</a>
                            <a href="#" className="nav-bar-link" onClick={this.props.loginClicked}>Login</a>
                            <a href="#" className="nav-bar-link" onClick={this.props.registerClicked}>Register</a>
                            <a href="#" className="nav-bar-link" onClick={this.props.allOffersClicked}>All offers</a>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div id="header-wrap">
                    <div id="header">
                        <div className="menu">
                            <a href="#" className="nav-bar-link" onClick={this.props.homeClicked}>Home</a>
                            <a href="#" className="nav-bar-link" onClick={this.props.allOffersClicked}>All offers</a>
                            <a href="#" className="nav-bar-link" id="helloUser">Hello, {username}!
                                <ul>
                                    <li><a href="#"  className="nav-bar-link" onClick={this.props.myAccountClicked}>My Account</a></li>
                                    <li><a href="#"  className="nav-bar-link" onClick={this.props.createOfferClicked}>Create Offer</a></li>
                                    <li><a href="#"  className="nav-bar-link">My Offers</a></li>
                                    <li><a href="#"  className="nav-bar-link" onClick={this.props.logoutClicked}>Logout</a></li>
                                </ul>
                            </a>
                        </div>
                    </div>
                </div>
            )
        }
    }
}