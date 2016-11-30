import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Footer from './Components/Footer'
import Header from './Components/Header';
import LoginView from './Views/loginView';
import RegisterView from './Views/registerView';
import HomeView from './Views/homeView';
import AllOffersGrid from './Views/allOffers';
import FullOffer from './Views/fullOfferView';

import './App.css';
import './Styles/Forms-Styles.css';
import './Styles/allOffers-Styles.css';

import DatabaseRequester from './Utils/DatabaseRequester';
import $ from 'jquery';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: sessionStorage.getItem('username'),
            userID: sessionStorage.getItem('userId')
        }
    }

    render() {
        return (
            <div className="App">
                <header>
                    <Header
                        username={this.state.username}
                        homeClicked={this.showHomeView.bind(this)}
                        loginClicked={this.showLoginView.bind(this)}
                        registerClicked={this.showRegisterView.bind(this)}
                        allOffersClicked={this.showAllOffersView.bind(this)}
                        logoutClicked={this.logout.bind(this)}
                    />
                    <div id="infoBox"></div>
                </header>
                <main id="main"></main>
                <div className="parallax"></div>
                <div className="parallax-next"></div>
                <Footer/>
            </div>
        );
    }

    showView(component) {
        ReactDOM.render(component,
            document.getElementById('main'));
    }

    showHomeView() {
        this.showView(<HomeView/>);
    }

    showLoginView() {
        this.showView(<LoginView onsubmit={this.login.bind(this)}/>);
    }

    showInfo(message) {
        $('#infoBox').css('color', 'orange');
        $('#infoBox').text(message).show();
        setTimeout(function() {
            $('#infoBox').fadeOut();
        }, 3000);
    }

    handleAjaxError(event, response) {
        let errorMsg = JSON.stringify(response);
        if (response.readyState === 0)
            errorMsg = "Cannot connect due to network error.";
        if (response.responseJSON && response.responseJSON.description)
            errorMsg = response.responseJSON.description;
        this.showError(errorMsg);
    }

    showError(errorMessage) {
        $('#infoBox').css('color', 'red');
        $('#infoBox').text(errorMessage).show();
        setTimeout(function () {
            $('#infoBox').fadeOut();
        }, 3000);
    }

    login(username, password) {
        DatabaseRequester.loginUser(username, password)
            .then(loginSuccess.bind(this));

        function loginSuccess(userInfo) {
            this.showHomeView();
            this.saveAuthInSession(userInfo);
            this.showInfo("User logged in successfully");
        }
    }

    showRegisterView() {
        this.showView(<RegisterView onsubmit={this.register.bind(this)}/>);
    }

    register(username, password) {
        DatabaseRequester.registerUser(username, password)
            .then(registerSuccess.bind(this));

        function registerSuccess(userInfo) {
            this.saveAuthInSession(userInfo);
            this.showInfo("User registration successful.");
        }
    }

    saveAuthInSession(userInfo) {
        sessionStorage.setItem('authToken', userInfo._kmd.authtoken);
        sessionStorage.setItem('userId', userInfo._id);
        sessionStorage.setItem('username', userInfo.username);

        // This will update the entire app UI (e.g. the navigation bar)
        this.setState({
            username: userInfo.username,
            userId: userInfo._id
        });
    }

    logout() {
        DatabaseRequester.logoutUser();
        sessionStorage.clear();
        this.setState({username: null, userId: null});
        this.showHomeView();
        this.showInfo('Logout successful.');
    }

    clickOffer() {
        this.showView(<FullOffer/>);
    }

    showAllOffersView() {
        this.showView(<AllOffersGrid offerClicked={this.clickOffer.bind(this)}/>);
    }

    renderGrid() {
        let blocks = document.getElementById("grid_container").children;
        let pad = 10, cols = 3, newleft, newtop;
        for (let i = 1; i < blocks.length; i++) {
            if (i % cols === 0) {
                newtop = (blocks[i - cols].offsetTop + blocks[i - cols].offsetHeight) + pad;
                blocks[i].style.top = newtop + "px";
            } else {
                if (blocks[i - cols]) {
                    newtop = (blocks[i - cols].offsetTop + blocks[i - cols].offsetHeight) + pad;
                    blocks[i].style.top = newtop + "px";
                }
                newleft = (blocks[i - 1].offsetLeft + blocks[i - 1].offsetWidth) + pad;
                blocks[i].style.left = newleft + "px";
            }
        }
    }

    componentDidMount() {
        window.addEventListener("load", this.renderGrid, false);
        window.addEventListener("resize", this.renderGrid, false);

        $(document).ajaxError(this.handleAjaxError.bind(this));
    }
}

export default App;
