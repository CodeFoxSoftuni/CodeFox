import React from 'react';
import '../Styles/Header-Styles.css'

export default class Header extends React.Component {
    render() {
        let username = this.props.username;
        if (username == null) {
            return (
                <div className="navbar navbar-fixed-top navbar-inverse">
                    <img src='https://s21.postimg.org/hbxdgil47/2f1e3e17638437_562bc8a645054.png' role="presentation"
                         alt="logo"/>
                    <a href="#" className="nav-bar-link" onClick={this.props.homeClicked}>Home</a>
                    <a href="#" className="nav-bar-link" onClick={this.props.loginClicked}>Login</a>
                    <a href="#" className="nav-bar-link" onClick={this.props.registerClicked}>Register</a>
                    <a href="#" className="nav-bar-link" onClick={this.props.allOffersClicked}>All offers</a>
                </div>
            )
        } else {
            return (
                <div className="navbar navbar-fixed-top navbar-inverse">
                    <img src="https://s21.postimg.org/hbxdgil47/2f1e3e17638437_562bc8a645054.png" alt="logo"/>
                    <a href="#" className="nav-bar-link" onClick={this.props.homeClicked}>Home</a>
                    <a href="#" className="nav-bar-link" onClick={this.props.allOffersClicked}>All offers</a>
                    <span className="helloUser">Hello, {username}!
                        <ul>
                            <li><a href="#" onClick={this.props.logoutClicked}>Logout</a></li>
                            <li><a href="#" >My Offers</a></li>
                        </ul>
                    </span>
                </div>
            )
        }
    }
}