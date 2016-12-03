import React, {Component} from 'react';

export default class Navbar extends Component {
    render() {
        return (
            <div className="menu">
                {this.props.children}
            </div>
        );
    }
}