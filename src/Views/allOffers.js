import React from 'react';
import $ from 'jquery';

export default class AllOffersGrid extends React.Component {
    componentDidMount() {
        let divWidth = Number($('#left').width())/16;
        $('#center').css('margin-left', divWidth+'em');
    }
    render(){
        return(
            <div id="container">
                <section id="left" className="menu">
                    <a href="#" id='section-label' className="category-link" >CATEGORIES</a>
                    <a href="#" className="category-link" >Example</a>
                    <a href="#" className="category-link" >Example</a>
                    <a href="#" className="category-link" >Example</a>
                </section>
                <section id="center">
                    <span className="offer">
                        <img src="http://www.w3schools.com/css/img_fjords.jpg" alt="dwa" width="20%"></img>
                        <p>Title</p>
                        <p>Price</p>
                    </span>
                    <span className="offer">
                        <img src="http://www.w3schools.com/css/img_fjords.jpg" alt="dwa" width="20%"></img>
                        <p>Title</p>
                        <p>Price</p>
                    </span>
                    <span className="offer">
                        <img src="http://www.w3schools.com/css/img_fjords.jpg" alt="dwa" width="20%"></img>
                        <p>Title</p>
                        <p>Price</p>
                    </span>
                    <span className="offer">
                        <img src="http://www.w3schools.com/css/img_fjords.jpg" alt="dwa" width="20%"></img>
                        <p>Title</p>
                        <p>Price</p>
                    </span>
                </section>
            </div>
        )
    }
}