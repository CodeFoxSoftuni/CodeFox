import React from 'react';
import $ from 'jquery';
import SingleOffer from '../Components/SingleOffer';
import '../Styles/allOffers-Styles.css'

export default class AllOffersGrid extends React.Component {
    componentDidMount() {
        let divWidth = Number($('#left').width()) / 16;
        $('#center').css('margin-left', divWidth + 5 + 'em');
    }

    detailsHandler (id) {
        this.props.details(id);
    }
    render() {
        return (
            <div id="container">
                <section id="left" className="categoriesMenu">
                    <a href="#" id='section-label' className="category-link">CATEGORIES</a>
                    <a href="#" className="category-link">Lingerie</a>
                    <a href="#" className="category-link">Shirts, Blouses, Sweaters</a>
                    <a href="#" className="category-link">Bottoms</a>
                    <a href="#" className="category-link">Sport wear</a>
                    <a href="#" className="category-link">Shoes</a>
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
                                         details = {() => this.detailsHandler(item._id)}
                            />
                            </div>
                        )
                    })}
                </section>
            </div>
        )
    }
}