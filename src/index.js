import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {IndexRoute, Router, Route, browserHistory} from 'react-router';
import HomePage from './Components/Home/HomePage';
import Login from './Components/Login/LoginPage';
import Register from './Components/Register/RegisterPage';
import Offers from './Components/Offers/OffersPage'
import Logout from './Components/Logout/LogoutPage';
import Account from './Components/Account/MyAccount';
import DetailedOffer from './Components/Offers/DetailedOffer';
import CreatePage from './Components/Create/CreatePage';
import Category from './Components/Offers/CategoryPage';
import About from './Components/About/AboutPage';
import Contacts from './Components/About/ContactsPage';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={HomePage}/>
            <Route path="login" component={Login}/>
            <Route path="register" component={Register}/>
            <Route path="about" component={About}/>
            <Route path="contacts" component={Contacts}/>
            <Route path="offers">
                <IndexRoute component={Offers}/>
                <Route path=":offerId" component={DetailedOffer}/>
            </Route>
            <Route path="category/:categoryName" component={Category}/>
            <Route path="create" component={CreatePage}/>
            <Route path="logout" component={Logout}/>
            <Route path="account" component={Account}/>
        </Route>
    </Router>,
  document.getElementById('root')
);
