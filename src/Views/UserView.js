import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import RegisterView from './registerView';
import HomeView from './homeView';
import LoginView from './loginView';
import $ from 'jquery';

export default class UserView {
    constructor() {

    }

    showHomeView() {
        ReactDOM.render(<HomeView />,
            document.getElementById('main'));
    }

    showRegisterView(onsubmit) {
        this.showView(<RegisterView onsubmit={onsubmit}/>);
    }

    showLoginView(onsubmit) {
        this.showView(<LoginView onsubmit={onsubmit}/>);
    }

    showView(component) {
        ReactDOM.render(component,
            document.getElementById('main'));
    }

    showInfo(message) {
        $('#infoBox').css('color', 'orange');
        $('#infoBox').text(message).show();
        setTimeout(function () {
            $('#infoBox').fadeOut();
        }, 3000);
    }
}
