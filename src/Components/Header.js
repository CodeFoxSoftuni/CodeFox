import React, { Component } from 'react';
import './Header-Styles.css'

export default class Header extends React.Component {
    render() {
            let username = this.props.username;
            if(username == null){
                return (
                <div className="nav-bar">
                    <img src='https://s21.postimg.org/hbxdgil47/2f1e3e17638437_562bc8a645054.png' role="presentation" alt="logo"/>
                    <a href="#" className="nav-bar-link" onClick={this.props.homeClicked}>Home</a>
                    <a href="#" className="nav-bar-link" onClick={this.props.loginClicked}>Login</a>
                    <a href="#" className="nav-bar-link" onClick={this.props.registerClicked}>Register</a>
                </div>
                )} else {
                return (
                    <div className="nav-bar">
                        <img src="img/logo.png" alt="logo" />
                        <a href="#" className="nav-bar-link" onClick={this.props.homeClicked}>Home</a>
                        <a href="#" className="nav-bar-link" onClick={this.props.LogoutClicked}>Logout</a>
                    </div>
                )
            }
    }
}