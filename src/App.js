import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Footer from './Components/Footer'
import Header from './Components/Header';
import LoginView from './Views/loginView';
import RegisterView from './Views/registerView';
import HomeView from './Views/homeView';
import AllOffersGrid from './Views/allOffers';

import './App.css';
import './Views/Forms-Styles.css';
import './Views/allOffers-Styles.css';

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
                    allOffersClicked={this.showAllOffersView.bind(this)}
                />
            </header>
            <div className="parallax"></div>
            <main id="main"></main>
            <div className="parallax-next"></div>
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
    showAllOffersView(){
        this.showView(<AllOffersGrid/>);
    }
    renderGrid(){
        let blocks = document.getElementById("grid_container").children;
        let pad = 10, cols = 3, newleft, newtop;
        for(let i = 1; i < blocks.length; i++){
            if (i % cols == 0) {
                newtop = (blocks[i-cols].offsetTop + blocks[i-cols].offsetHeight) + pad;
                blocks[i].style.top = newtop+"px";
            } else {
                if(blocks[i-cols]){
                    newtop = (blocks[i-cols].offsetTop + blocks[i-cols].offsetHeight) + pad;
                    blocks[i].style.top = newtop+"px";
                }
                newleft = (blocks[i-1].offsetLeft + blocks[i-1].offsetWidth) + pad;
                blocks[i].style.left = newleft+"px";
            }
        }
    }
    componentDidMount(){
        window.addEventListener("load", this.renderGrid, false);
        window.addEventListener("resize", this.renderGrid, false);
    }
}

export default App;
