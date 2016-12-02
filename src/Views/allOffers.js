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

    categoryHandler(category){
        this.props.listByCategory(category);
    }

    render() {
        return (
            <div id="container">
                <section id="left" className="menu">
                    <a href="#" id='section-label' className="category-link">CATEGORIES</a>
                    <a href="#" className="category-link" onClick={() => this.categoryHandler('Lingerie')}>Lingerie</a>
                    <a href="#" className="category-link" onClick={() => this.categoryHandler('Bottoms')}>Bottoms</a>
                    <a href="#" className="category-link" onClick={() => this.categoryHandler('Shirts-Blouses-Sweaters')}>Shirts, Blouses etc.</a>
                    <a href="#" className="category-link" onClick={() => this.categoryHandler('Sport-wear')}>Sport wear</a>
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