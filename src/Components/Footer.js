import React, { Component } from 'react';
import '../Styles/Footer-Styles.css'

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