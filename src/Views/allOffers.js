import React from 'react';
import $ from 'jquery';
import SingleOffer from '../Components/SingleOffer';
import '../Styles/allOffers-Styles.css'

export default class AllOffersGrid extends React.Component {
    componentDidMount() {
        let divWidth = Number($('#left').width()) / 16;
        $('#center').css('margin-left', divWidth + 5 + 'em');
    }

    render() {
        return (
            <div id="container">
                <section id="left" className="menu">
                    <a href="#" id='section-label' className="category-link">CATEGORIES</a>
                    <a href="#" className="category-link">Example</a>
                    <a href="#" className="category-link">Example</a>
                    <a href="#" className="category-link">Example</a>
                </section>
                <br></br>
                <section id="center">
                    {this.props.offers.map((item, index) => {
                        return (
                            <div className="offer" key={index}>
                            <SingleOffer
                                         image={item.image}
                                         itemType={item.itemType}
                                         price={item.price}
                            />
                            </div>
                        )
                    })}
                </section>
            </div>
        )
    }
}