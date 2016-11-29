import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Footer from './Components/Footer'
import Header from './Components/Header';
import LoginView from './Views/loginView';
import RegisterView from './Views/registerView';
import HomeView from './Views/homeView';

import './App.css';
import './Views/Forms-Styles.css';

class App extends Component {
    constructor(props){
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
                />
            </header>
            <main id="main"></main>
            <Footer/>
        </div>
    );
  }
    showView(component) {
        ReactDOM.render(component,
            document.getElementById('main'));
    }

  showHomeView(){
      this.showView(<HomeView/>);
  }
  showLoginView() {
      this.showView(<LoginView/>);
  }
  showRegisterView(){
      this.showView(<RegisterView/>);
  }
}

export default App;
