import React, { Component } from 'react';
import './Footer-Styles.css'

export default class Footer extends Component {
    render() {
        let dateYear = new Date().getFullYear();
        return (
            <footer className="footer">
                CodeFox© {dateYear}
            </footer>
        );
    }
}