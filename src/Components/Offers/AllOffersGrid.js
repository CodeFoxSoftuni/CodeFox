import React from 'react';
import $ from 'jquery';
import SingleOffer from './SingleOffer';
import {Link} from 'react-router';

export default class AllOffersGrid extends React.Component {
    componentDidMount() {
        let divWidth = Number($('#left').width()) / 16;
        $('#center').css('margin-left', divWidth + 'em');
    }

    render() {
        return (
            <div id="container">
                <section id="left" className="categoriesMenu">
                    <div id='section-label' className="category-link">CATEGORIES</div>
                    <Link to="/category/All" className="category-link">All</Link>
                    <Link to="/category/Lingerie" className="category-link">Lingerie</Link>
                    <Link to="/category/Bottoms" className="category-link">Bottoms</Link>
                    <Link to="/category/Shirts, Blouses etc." className="category-link">Shirts, Blouses etc.</Link>
                    <Link to="/category/Sport wear" className="category-link">Sport wear</Link>
                </section>
                <br></br>
                <section id="center">
                    {this.props.offers.map((item, index) => {
                        return (
                            <div className="all-offers" key={index}>
                            <SingleOffer
                                         image={item.image}
                                         category={item.category}
                                         itemType={item.itemType}
                                         price={item.price}
                                         offerId={item._id}
                            />
                            </div>
                        )
                    })}
                </section>
            </div>
        )
    }
}