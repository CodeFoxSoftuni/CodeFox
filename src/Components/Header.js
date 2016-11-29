import React, { Component } from 'react';
import './Header-Styles.css'

export default class Header extends React.Component {
    render() {
            let username = this.props.username;
            if(username == null){
                return (
                <div className="nav-bar">
                    <a href="#" className="nav-bar-link" onClick={this.props.homeClicked}>Home</a>
                    <a href="#" className="nav-bar-link" onClick={this.props.loginClicked}>Login</a>
                    <a href="#" className="nav-bar-link" onClick={this.props.registerClicked}>Register</a>
                </div>
                )} else {
                return (
                    <div className="nav-bar">
                        <a href="#" className="nav-bar-link" onClick={this.props.homeClicked}>Home</a>
                        <a href="#" className="nav-bar-link" onClick={this.props.LogoutClicked}>Logout</a>
                    </div>
                )
            }
    }
}