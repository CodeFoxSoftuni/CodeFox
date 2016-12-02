import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Footer from './Components/Footer'
import Header from './Components/Header';
import HomeView from './Views/homeView';
import AllOffersGrid from './Views/allOffers';
import FullOffer from './Views/fullOfferView';
import MyAccount from './Views/myAccount';

import UserController from './Controllers/UserController';
import UserModel from './Models/UsersModel';
import UserView from './Views/UserView';

import OfferController from './Controllers/OfferController';
import OffersModel from './Models/OffersModel';
import CreateOffer from './Views/createOfferView';

import './App.css';
import './Styles/Forms-Styles.css';
import './Styles/allOffers-Styles.css';
import './Styles/createOffer-Styles.css';
import './Styles/myAccount-Style.css'

import DatabaseRequester from './Utils/DatabaseRequester';
import $ from 'jquery';

class App extends Component {
    constructor(props) {
        super(props);

        let userModel = new UserModel(DatabaseRequester);
        let userView = new UserView();
        this.userController = new UserController(userModel, userView, this);

        let offersModel = new OffersModel(DatabaseRequester);
        let createOfferView = new CreateOffer();
        console.dir(offersModel);
        this.offerController = new OfferController(offersModel, createOfferView, this);
        console.dir(this.offerController)
        this.state = {
            username: sessionStorage.getItem('username'),
            userId: sessionStorage.getItem('userId'),
        }
    }

    render() {
        return (
            <div className="App">
                <header>
                    <Header
                        username={this.state.username}
                        homeClicked={this.showHomeView.bind(this)}
                        loginClicked={this.userController.loadLoginView.bind(this.userController)}
                        registerClicked={this.userController.loadRegisterView.bind(this.userController)}
                        allOffersClicked={this.showAllOffersView.bind(this)}
                        logoutClicked={this.userController.logoutUser.bind(this.userController)}
                        createOfferClicked={this.showCreateOfferView.bind(this)}
                        myAccountClicked={this.showMyAccountView.bind(this)}
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

    clickOffer() {
        this.showView(<FullOffer/>);
    }

    showAllOffersView() {
        this.showView(<AllOffersGrid/>);
    }

    showCreateOfferView(){
        this.showView(<CreateOffer onsubmit={this.offerController.createOffer.bind(this.offerController)}/>); // Here we implement the onsubmit property and pass it to OfferController
    }

    showMyAccountView() {
        this.showView(<MyAccount/>);
    }


    componentDidMount() {
        let divHeight = Number($('#header-wrap').height())/16;
        $('#main').css('margin-top', divHeight+'em');
        this.showHomeView();
        $(document).ajaxError(this.handleAjaxError.bind(this));
        $(document)
            .one('focus.autoExpand', 'textarea.autoExpand', function(){
                var savedValue = this.value;
                this.value = '';
                this.baseScrollHeight = this.scrollHeight;
                this.value = savedValue;
            })
            .on('input.autoExpand', 'textarea.autoExpand', function(){
                var minRows = this.getAttribute('data-min-rows')|0, rows;
                this.rows = minRows;
                rows = Math.ceil((this.scrollHeight - this.baseScrollHeight) / 17);
                this.rows = minRows + rows;
            });
    }
}


export default App;
