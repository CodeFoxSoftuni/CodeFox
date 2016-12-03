import React, { Component } from 'react';
import {Link} from 'react-router';
import '../Styles/Footer-Styles.css'

export default class Footer extends Component {
    render() {
        let dateYear = new Date().getFullYear();
        return (
            <footer className="footer">
                CodeFox© {dateYear}
                <footer id="hiddenFooter">
                    <Link to="/about" className="footer-link">About The Team</Link>
                    <Link to="/contacts" className="footer-link">Contacts</Link>
                </footer>
            </footer>
        );
    }
}