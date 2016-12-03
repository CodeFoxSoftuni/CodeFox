import React from 'react';
import '../Styles/Header-Styles.css'

export default class Header extends React.Component {
    render() {
        return (
            <div id="header-wrap">
                {this.props.children}
            </div>
        )
    }
}
